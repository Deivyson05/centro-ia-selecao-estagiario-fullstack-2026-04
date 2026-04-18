import json
from multiprocessing import context
import re
from anthropic import Anthropic
from groq import Groq
from api.settings import settings
from api.services.prestador_service import PrestadorService
from api.services.horario_marcado_service import HorarioMarcadoService
import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
from pypdf import PdfReader
from pathlib import Path

class ChatService:
    def __init__(self, prestador_service: PrestadorService, horario_marcado_service: HorarioMarcadoService, docs_folder: str = "./api/docs"):
        self.client = Groq(api_key=settings.llm_api_key)
        self.prestador_service = prestador_service
        self.horario_marcado_service = horario_marcado_service
        self.histories = {}
        self.bimbimbambam = "bimbimbambam"
        self.vectorstore = self._build_index(docs_folder)
        
    def _carregar_servicos(self) -> str:
        try:
            from api.database import SessionLocal
            from api.models.prestador import Prestador
            db = SessionLocal()
            try:
                servicos = db.query(Prestador.servico).distinct().all()
                return "\n".join([f"- {s[0]}" for s in servicos])
            finally:
                db.close()
        except Exception as e:
            print(f"Erro ao carregar serviços: {e}")
            return "- Consulte os serviços disponíveis"

    def _executar_tool(self, tool_name: str, args: dict) -> str:
        if tool_name == "get_prestadores_servico":
            prestadores = self.prestador_service.get_by_servico(args["servico"])
            return json.dumps([
                {"id": p.id, "nome": p.nome, "servico": p.servico} for p in prestadores
            ], ensure_ascii=False)
        
        if tool_name == "get_horarios_ocupados":
            horarios = self.horario_marcado_service.get_by_prestador_e_data(args["prestador_id"], args["data"])
            return json.dumps([h.horario for h in horarios])
        
        if tool_name == "agendar":
            from api.schemas.horario_marcado_schema import HorarioMarcadoCreate
            self.horario_marcado_service.create(HorarioMarcadoCreate(**args))
            return json.dumps({"sucesso": True})
        
        return json.dumps({"error": "Tool não encontrada"})
        
    def _load_documents(self, folder: str) -> list[dict]:
        
        docs = []
        for path in Path(folder).rglob("*"):
            if path.suffix == ".pdf":
                reader = PdfReader(path)
                text = "\n".join(p.extract_text() or "" for p in reader.pages)
                print(f"=== {path.name} ===")
                print(text)  # ← vê o que está extraindo
                print("==================")
            elif path.suffix in (".txt", ".md"):
                text = path.read_text(encoding="utf-8")
            else:
                continue
            docs.append({"source": str(path), "text": text})
            print(f"Documentos carregados: {len(docs)}")
            for d in docs:
                print(f" - {d['source']} ({len(d['text'])} chars)")
        return docs
    
    def _chunk(self, text: str, size: int = 500, overlap: int = 50) -> list[str]:
        chunks, start = [], 0
        while start < len(text):
            chunks.append(text[start:start+size])
            start += size - overlap
        return chunks
    
    def _build_index(self, folder: str) -> chromadb.Client:
        ef = SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")
        client = chromadb.Client()
        collection = client.get_or_create_collection("docs", embedding_function=ef)

        if collection.count() > 0:
            return collection
        
        for doc in self._load_documents(folder):
            for i, chunk in enumerate(self._chunk(doc["text"])):
                collection.add(
                    ids=[f"{doc['source']}_{i}"],
                    documents=[chunk],
                    metadatas=[{"source": doc["source"]}]
                )
        return collection
        
    def _retrieve(self, query: str, k: int = 5) -> str:
        results = self.vectorstore.query(query_texts=[query], n_results=k)
        chunks = results["documents"][0]
        return "\n\n---\n\n".join(chunks)
    
    def _build_system_prompt(self, context: str) -> str:
        return (
            f"""
            Você é Mika, um assistente de agendamento da clínica Mika Odonto.

            ### Informações da clínica:
            {context}

            ### Serviços disponíveis (use EXATAMENTE esses nomes):
            {self._carregar_servicos()}

            ### Comandos disponíveis (use UM por resposta, sem texto depois do JSON):
            Buscar prestadores:
            ```json
            {{"action": "get_prestadores_servico", "servico": "nome exato do serviço"}}
            ```

            Verificar horários ocupados:
            ```json
            {{"action": "get_horarios_ocupados", "prestador_id": <id retornado pelo get_prestadores_servico>, "data": "YYYY-MM-DD"}}
            ```

            Agendar (SOMENTE após confirmação explícita do usuário):
            ```json
            {{"action": "agendar", "nome": "...", "email": "...", "telefone": "...", "prestador_id": <id retornado pelo get_prestadores_servico>, "data": "YYYY-MM-DD", "hora": "HH:MM", "servico": "..."}}
            ```
            IMPORTANTE: prestador_id deve ser o ID real retornado pela busca de prestadores, nunca invente.

            ### REGRAS OBRIGATÓRIAS:
            - NUNCA pule etapas
            - NUNCA agende sem confirmação explícita do usuário
            - NUNCA invente prestadores ou horários
            - Mande apenas UM bloco JSON por resposta
            - SEMPRE espere o resultado antes de continuar

            ### Fluxo OBRIGATÓRIO na ordem:
            1. Colete nome completo, email e telefone
            2. Pergunte serviço e data
            3. Mande o JSON de get_prestadores_servico e PARE — espere o resultado
            4. Apresente os prestadores reais ao usuário e pergunte qual prefere
            5. Mande o JSON de get_horarios_ocupados e PARE — espere o resultado
            6. Apresente os horários livres e pergunte qual prefere
            7. Faça um resumo completo e pergunte "Confirma o agendamento?"
            8. SOMENTE se o usuário disser sim, mande o JSON de agendar
            """
            
        )

    def send_message(self, message: str, session_id: str = "default") -> str:
        if session_id not in self.histories:
            self.histories[session_id] = []

        history = self.histories[session_id]
        print(f"Session: {session_id}")
        print(f"Histórico atual: {len(history)} mensagens")
        print(f"IDs de sessões salvas: {list(self.histories.keys())}")
        context = self._retrieve(message)
        

        if message:
            context = self._retrieve(message)
            self.histories[f"{session_id}_context"] = context
            history.append({"role": "user", "content": message})
        else:
            context = self.histories.get(f"{session_id}_context", "")

        system = {"role": "system", "content": self._build_system_prompt(context)}

        response = self.client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[system] + history,
            )
        
        reply = response.choices[0].message.content
        history.append({"role": "assistant", "content": reply})

        try:
            matches = re.findall(r'```json\s*(.*?)\s*```', reply, re.DOTALL)
            print(f"Matches encontrados: {len(matches)}")  # ← quantos JSONs achou?
            
            if matches:
                for json_str in matches:
                    print(f"JSON bruto: {json_str}")
                    dados = json.loads(json_str.strip())
                    print(f"Dados parsed: {dados}") 
                    action = dados.get("action")
                    print(f"Action: {action}")

                if action == "get_prestadores_servico":
                    resultado = self._executar_tool("get_prestadores_servico", {"servico": dados["servico"]})
                    print(f"Prestadores raw: {resultado}")
                    
                    history.append({"role": "user", "content": f"Resultado da busca de prestadores: {resultado}"})
                    return self.send_message("", session_id)
                elif action == "get_horarios_ocupados":
                    resultado = self._executar_tool("get_horarios_ocupados", {"prestador_id": dados["prestador_id"], "data": dados["data"]})
                    print(f"Horários raw: {resultado}")
                    history.append({"role": "user", "content": f"Resultado da busca de horários ocupados: {resultado}"})
                    return self.send_message("", session_id)
                elif action == "agendar":
                    from api.schemas.horario_marcado_schema import HorarioMarcadoCreate
                    self.horario_marcado_service.create(HorarioMarcadoCreate(
                        cliente_nome=dados["nome"],
                        cliente_email=dados["email"],
                        cliente_telefone=dados["telefone"],
                        prestador_id=dados["prestador_id"],
                        data_hora=f"{dados['data']} {dados['hora']}",
                        servico=dados["servico"]
                    ))
                    return "Agendamento realizado com sucesso! ✅"
                
        except Exception as e:
            print(f"Erro ao processar a mensagem: {e}")
            pass

        return reply
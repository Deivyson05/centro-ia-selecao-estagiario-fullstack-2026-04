from anthropic import Anthropic
from groq import Groq
from settings import settings
import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
from pypdf import PdfReader
from pathlib import Path

class ChatService:
    def __init__(self, docs_folder: str = "./docs"):
        self.client = Groq(api_key=settings.llm_api_key)
        self.history = []
        self.vectorstore = self._build_index(docs_folder)

    def _load_documents(self, folder: str) -> list[dict]:
        docs = []
        for path in Path(folder).rglob("*.pdf"):
            if path.suffix == ".pdf":
                reader = PdfReader(path)
                text = "\n".join(p.extract_text() or "" for p in reader.pages)
            elif path.suffix in (".txt", ".md"):
                text = path.read_text(encoding="utf-8")
            else:
                continue
            docs.append({"source": str(path), "text": text})
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
        
    def _retrieve(self, query: str, k: int = 3) -> str:
        results = self.vectorstore.query(query_texts=[query], n_results=k)
        chunks = results["documents"][0]
        return "\n\n---\n\n".join(chunks)
    
    def _build_system_prompt(self, context: str) -> str:
        return (
            "Você é um assistente útil. Use o contexto abaixo para responder.\n"
            "Se a resposta não estiver no contexto, diga que não sabe.\n\n"
            f"### Contexto:\n{context}"
        )

    def send_message(self, message: str) -> str:
        context = self._retrieve(message)
        system = {"role": "system", "content": self._build_system_prompt(context)}

        self.history.append({"role": "user", "content": message})
        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[system] + self.history
        )
        reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": reply})
        return reply
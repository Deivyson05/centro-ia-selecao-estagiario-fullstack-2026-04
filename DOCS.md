# Mika AI
### Plataforma Inteligente de Atendimento e Agendamento

## Visão Geral

O Mika AI é uma plataforma de atendimento automatizado com Inteligência Artificial capaz de responder dúvidas com base em documentos internos da empresa e conduzir fluxos de agendamento de forma conversacional.

Para demonstrar a solução, foi utilizado um cenário fictício de clínica odontológica, mas a arquitetura foi pensada para ser adaptável a outros contextos de atendimento.

---

# Problema

Empresas frequentemente enfrentam desafios com:

- Responder dúvidas recorrentes manualmente;
- Centralizar informações institucionais;
- Realizar agendamentos respeitando regras operacionais;
- Evitar conflitos de horários e erros humanos;
- Escalar atendimento sem aumentar carga operacional.

---

# Solução Proposta

A solução utiliza IA para:

- Responder perguntas com base em documentos da empresa (RAG);
- Conduzir fluxos conversacionais para agendamento;
- Coletar informações obrigatórias do cliente;
- Validar disponibilidade e conflitos de horário;
- Sugerir horários alternativos quando necessário.

---

# Funcionalidades

## Atendimento com IA
- Respostas contextualizadas usando PDFs da empresa
- Consulta de informações institucionais
- Fluxo conversacional multi-turn

## Agendamento Inteligente
- Coleta de:
  - Nome
  - E-mail
  - Telefone
  - Serviço
  - Data
  - Horário

## Validações
- Horário dentro do expediente
- Conflito com agenda existente
- Sugestão de novos horários

---

# Arquitetura

## Frontend
- Aplicação web
- Interface com chat integrado
- Comunicação com API FastAPI

## Backend
- Python
- FastAPI
- ChatService como camada de orquestração

## IA
- LLM para interpretação e condução do fluxo
- RAG com:
  - ChromaDB
  - Embeddings
  - PDFs indexados

## Banco de Dados
- PostgreSQL (Neon)

---

# Fluxo da Aplicação

Usuário envia mensagem

↓  

Frontend envia para API

↓

ChatService decide:

- dúvida → usa RAG
- agendamento → executa fluxo conversacional

↓

IA pode gerar ações estruturadas (JSON)

↓

Backend intercepta o JSON e executa:

- consulta prestadores
- consulta disponibilidade
- cria agendamento

↓

Resposta retorna ao usuário

---

# Estratégia de Tool Calling

Como o modelo utilizado não possuía suporte nativo a function/tool calling, foi implementada uma estratégia alternativa baseada em comandos estruturados em JSON gerados pelo prompt.

Esses comandos são interceptados e convertidos pelo backend em ações reais.

Exemplo:

```json
{
  "action": "get_prestadores_servico",
  "servico": "Limpeza"
}
```

---

# Estrutura do Projeto

```bash
frontend/

backend/
  api/
    services/
      chat_service.py
      prestador_service.py
      horario_marcado_service.py

    models/
    schemas/
    docs/
```

---

# Tecnologias Utilizadas

## Frontend
- React

## Backend
- FastAPI
- Python

## IA
- Groq
- Llama 3.3 70B
- ChromaDB
- Sentence Transformers

## Banco
- PostgreSQL (Neon)

---

# Como Executar
Abra o projeto no codespace

## Backend

```
cd back-end
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

criar arquivo .env e adicionar as seguintes 
```
llm_api_key=
database_url=
debug=True
```
os parâmetros estão disponíveis no env enviado por email

rodar
```
python -m uvicorn api.index:app --reload
```
vá em portas e deixe a porta do backend como Public
---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

adicione um .env com o seguinte parâmetro
```
NEXT_PUBLIC_BACKENDAPI=
```
no parâmetro adicione o link de conexão do servidor backend
exemplo: https://fluffy-orbit-wwgjqqwpxg63566q-8000.app.github.dev

---

# Demonstração do Caso de Uso

Exemplo:

Usuário:
"Quero marcar uma consulta"

Sistema:
- coleta dados
- verifica prestadores
- valida disponibilidade
- confirma agendamento

---

# Decisões Técnicas

- Centralização da orquestração conversacional no ChatService
- Implementação manual de tool calling por JSON
- Uso de RAG para respostas contextualizadas
- Persistência de agendamentos em banco relacional

---

# Limitações do MVP

- Fluxo demonstrado em domínio específico (clínica)
- Sem autenticação
- Sem painel administrativo

---

# Possíveis Evoluções

- Suporte multissetor
- Painel administrativo
- Function calling nativo
- Agentes com ferramentas adicionais

---

# Autor

Deivyson Ricardo Silva dos Santos


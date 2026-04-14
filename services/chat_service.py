from anthropic import Anthropic
from groq import Groq
from settings import settings

class ChatService:
    def __init__(self):
        self.client = Groq(api_key=settings.llm_api_key)
        self.history = []

    def send_message(self, message: str) -> str:
        self.history.append({"role": "user", "content": message})
        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=self.history
        )
        reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": reply})
        return reply
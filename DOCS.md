## Execução do projeto
instalação
```
cd back-end
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

criar arquivo .env e adicionar as seguintes 

rodar
```
python -m uvicorn api.index:app --reload
```
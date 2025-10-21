# Hemopatias API - Backend de Análise de Imagens

API REST em Python para análise automatizada de amostras celulares usando OpenCV.

## Tecnologias

- Flask
- OpenCV
- NumPy
- Pillow

## Instalação Local

```bash
cd api
pip install -r requirements.txt
python app.py
```

A API estará disponível em `http://localhost:5000`

## Endpoints

### GET /health
Verificação de saúde da API

**Resposta:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00"
}
```

### POST /api/analyze
Análise de imagem celular

**Request:**
- Content-Type: `multipart/form-data`
- Body: `image` (file)

**Resposta:**
```json
{
  "sucesso": true,
  "diagnostico": "Normal",
  "nivel_anormalidade": "Baixo",
  "estatisticas": {
    "total_celulas": 127,
    "celulas_escuras": 8,
    "celulas_maiores": 5,
    "quantidade_infestacao_g": 12.5,
    "porcentagem_infestacao": 0.0125
  },
  "celulas": [...],
  "imagens": {
    "processada": "data:image/png;base64,...",
    "cinza": "data:image/png;base64,...",
    "limiarizada": "data:image/png;base64,..."
  },
  "tempo_processamento": 2.34
}
```

## Deploy

### Render.com

1. Crie uma conta em [Render.com](https://render.com)
2. Clique em "New +" → "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name:** hemopatias-api
   - **Environment:** Python 3
   - **Build Command:** `pip install -r api/requirements.txt`
   - **Start Command:** `gunicorn -w 4 -b 0.0.0.0:$PORT api.app:app`
   - **Root Directory:** deixe em branco ou coloque `api`
5. Clique em "Create Web Service"

### Railway.app

1. Crie uma conta em [Railway.app](https://railway.app)
2. Clique em "New Project" → "Deploy from GitHub repo"
3. Selecione seu repositório
4. Railway detectará automaticamente o Python
5. Adicione as variáveis de ambiente se necessário
6. Deploy será feito automaticamente

### AWS Lambda (Avançado)

Requer configuração adicional com AWS API Gateway e Lambda Layers para OpenCV.

## Variáveis de Ambiente (Opcional)

```
FLASK_ENV=production
PORT=5000
```

## Testes

```bash
curl -X POST http://localhost:5000/api/analyze \
  -F "image=@sample.png"
```

## Notas Importantes

- A API aceita imagens PNG, JPG e JPEG
- Tamanho máximo recomendado: 10MB
- Tempo de processamento: 2-10 segundos dependendo do tamanho da imagem
- Para uso em produção, configure rate limiting e autenticação

# Guia de Deploy - Hemopatias

Este guia explica como fazer o deploy completo do projeto Hemopatias (frontend + backend).

## Estrutura do Projeto

```
project/
├── src/              # Frontend React + TypeScript
├── api/              # Backend Python Flask
│   ├── app.py       # API principal
│   ├── requirements.txt
│   └── config files
└── public/
```

## 1. Deploy do Backend (API Python)

### Opção A: Render.com (Recomendado - Grátis)

1. **Criar conta no Render**
   - Acesse [render.com](https://render.com) e crie uma conta

2. **Novo Web Service**
   - Clique em "New +" → "Web Service"
   - Conecte seu repositório GitHub

3. **Configurações**
   - **Name:** `hemopatias-api`
   - **Environment:** `Python 3`
   - **Root Directory:** `api`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`

4. **Deploy**
   - Clique em "Create Web Service"
   - Aguarde o deploy (5-10 minutos)
   - Anote a URL: `https://hemopatias-api.onrender.com`

### Opção B: Railway.app (Alternativa)

1. **Criar conta no Railway**
   - Acesse [railway.app](https://railway.app)

2. **Novo Projeto**
   - "New Project" → "Deploy from GitHub repo"
   - Selecione o repositório

3. **Configurar**
   - Railway detecta Python automaticamente
   - Vá em Settings → Root Directory: `api`
   - Deploy automático

4. **URL**
   - Clique no projeto → Settings → Generate Domain
   - Anote a URL gerada

### Opção C: Local (Para Testes)

```bash
cd api
pip install -r requirements.txt
python app.py
```

A API estará em `http://localhost:5000`

## 2. Deploy do Frontend

### Opção A: Vercel (Recomendado - Grátis)

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configurar variáveis de ambiente**
   - No dashboard da Vercel, adicione:
   ```
   VITE_API_URL=https://sua-api.onrender.com
   ```

### Opção B: Netlify

1. **Instalar Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Opção C: GitHub Pages

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicionar scripts no package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 3. Conectar Frontend ao Backend

Após fazer o deploy do backend, você precisa configurar a URL da API no frontend:

### Método 1: Variável de Ambiente (Recomendado)

1. Crie arquivo `.env.production`:
   ```
   VITE_API_URL=https://hemopatias-api.onrender.com
   ```

2. Use no código:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

### Método 2: Manual na Interface

O usuário pode inserir a URL da API diretamente na interface de análise.

## 4. Testar o Sistema

1. **Testar API**
   ```bash
   curl https://sua-api.onrender.com/health
   ```

2. **Testar Upload**
   - Acesse o frontend
   - Clique em "Analisar Imagem"
   - Faça upload de uma imagem de amostra
   - Verifique os resultados

## 5. Troubleshooting

### API não responde
- Verifique logs no Render/Railway
- Confirme que todas as dependências foram instaladas
- Teste localmente primeiro

### CORS Error
- Verifique se `flask-cors` está instalado
- Confirme que a API está configurada corretamente

### Frontend não conecta
- Verifique a URL da API
- Teste a URL diretamente no navegador
- Verifique console do navegador para erros

## 6. Custos

### Grátis (Tier Free)
- **Render:** 750 horas/mês (suficiente para 1 app)
- **Railway:** $5 de créditos mensais
- **Vercel:** Projetos ilimitados
- **Netlify:** 100GB bandwidth/mês

### Limitações do Tier Gratuito
- Render: API "dorme" após 15 min de inatividade (primeiro request demora ~1min)
- Railway: Limite de 500 horas/mês ou $5 de uso
- Considere upgrade para produção real

## 7. Melhorias Recomendadas

1. **Adicionar autenticação**
2. **Rate limiting**
3. **Cache de resultados**
4. **Banco de dados para histórico**
5. **CDN para imagens**
6. **Monitoramento e logs**

## 8. Suporte

Para dúvidas:
- Email: juliocamposmachado@gmail.com
- WhatsApp: +55 11 97060-3441
- GitHub: [juliocamposmachado/hemopatias](https://github.com/juliocamposmachado/hemopatias)

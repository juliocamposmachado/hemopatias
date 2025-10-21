# 🧬 Hemopatias: Análise Automatizada de Amostras Celulares

Este projeto tem como objetivo aplicar técnicas de visão computacional para detectar anomalias hematológicas em imagens de amostras celulares, contribuindo para diagnósticos médicos mais rápidos e precisos.

---

## 🩺 Aplicações na Medicina

- **Diagnóstico precoce** de doenças hematológicas como leucemias, linfomas e anemias.
- **Classificação morfológica** de células com base em tamanho, forma e coloração.
- **Estimativa de infestação celular** para avaliação de gravidade.
- **Mapeamento de alterações celulares** como hiperplasia, atrofia e metaplasia.
- **Validação com banco de dados clínico** para comparação com padrões conhecidos.

---

## ⚙️ Tecnologias Utilizadas

- `OpenCV` para processamento de imagem
- `NumPy` para cálculos matemáticos
- `Matplotlib` para visualização gráfica
- `Tkinter` para interface gráfica
- `PIL` para manipulação de imagens
- `Python` como linguagem principal

---

## 📸 Como Funciona

1. **Carregamento da imagem** da amostra celular (`imagem.png`)
2. **Conversão para escala de cinza** e segmentação por limiarização
3. **Detecção de contornos** para identificar células
4. **Cálculo de métricas**: área, perímetro, forma e diferença de cor
5. **Classificação das células** com base em thresholds definidos
6. **Diagnóstico automático** com base em padrões morfológicos
7. **Comparação com banco clínico** (`cholangiocarcinoma.txt`)
8. **Visualização gráfica** dos resultados e contornos celulares

---

## 🧪 Exemplos de Diagnósticos Detectados

- **Hiperplasia**: aumento no número de células
- **Hipoplasia**: diminuição no número de células
- **Hipertrofia**: aumento no tamanho das células
- **Metaplasia**: alteração no tipo celular
- **Acúmulos intracelulares**: presença de substâncias anormais

---

## 🚀 Como Executar

```bash
python main.py
```

Certifique-se de que os arquivos `imagem.png` e `cholangiocarcinoma.txt` estejam na mesma pasta do script.

---

## 📁 Estrutura do Projeto

```
hemopatias/
├── main.py
├── imagem.png
├── cholangiocarcinoma.txt
└── README.md
```

---

## 👨‍⚕️ Contribuição para a Saúde

Este projeto é uma iniciativa experimental que busca unir ciência de dados e medicina diagnóstica. Ele pode ser expandido para integrar modelos de aprendizado de máquina, bancos de dados hospitalares e sistemas de apoio à decisão clínica.

---

## 📌 Aviso

Este software é apenas para fins educacionais e de pesquisa. Não substitui diagnóstico médico profissional.

Para fazer parte do nosso grupo de pesquisa, acesse [Engenharia Biotecnológica](https://chat.whatsapp.com/EpXVaaIbRiXHK0uubbVu16)
Venha fazer parte dessa jornada emocionante e descobrir as infinitas possibilidades da biotecnologia!

Estamos ansiosos para conhecer você e compartilhar conhecimentos e experiências nesse campo fascinante. Seja bem-vindo ao nosso grupo de Biotecnologia!

Links uteis: 
[Colangiocarcinoma](https://pt.wikipedia.org/wiki/Colangiocarcinoma),
[Exames instantâneos com gota de sangue](https://chat.openai.com/c/c97e485a-5059-4d6d-9df6-531c69a19c8f),
[Biobanco de patologias humanas](https://chat.openai.com/c/c050de9e-c76c-4b30-abb7-f728b568f25a)


![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/90c32393-b69f-4cc2-94b1-f56291783d46)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/e764bc92-24aa-4fb4-85c1-e427bf652d7e)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/261c561f-aa2f-4959-bc08-cab3118eab7c)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/949ff6a7-ee8e-4017-b10d-d23e279280ba)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/8b6d74ce-5b7a-4a8e-a260-49f903ef1e50)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/e788c6ea-5b11-4a28-8bd8-5213af8bf80e)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/651e7f47-45c0-4a20-b4b8-836e06e43921)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/9d307ad2-3264-4a1a-9c1f-31fd73571abb)

![image](https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/fb2ca796-2e24-4bb9-8dc8-6f29d14a234c)








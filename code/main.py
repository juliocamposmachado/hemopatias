import cv2
import numpy as np
import matplotlib.pyplot as plt
import tkinter as tk
from PIL import ImageTk, Image
import datetime

# Função para realizar a análise da amostra
def analisar_amostra():

# Carrega a imagem de exemplo
    imagem = cv2.imread('imagem.png')
    print("Imagem carregada.")

# Converte a imagem para escala de cinza
    imagem_cinza = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
    print("Imagem convertida para escala de cinza.")

# Aplica um filtro de limiarização para segmentar as células
    _, imagem_limiarizada = cv2.threshold(imagem_cinza, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    print("Imagem limiarizada.")

# Encontra os contornos das células segmentadas
    contornos, _ = cv2.findContours(imagem_limiarizada, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    print("Contornos encontrados.")

    # Obter a hora de início do processo
    hora_inicio = datetime.datetime.now()
    print("Hora de início do processo:", hora_inicio)


# Inicializa as listas para armazenar os resultados de tamanho, forma e diferença de cor
    print("Inicializando as listas para armazenar os resultados o processo leva cerca de 5 minutos.")
    tamanhos = []
    formas = []
    diferencas_cor = []

# Loop sobre cada contorno encontrado
    for i, contorno in enumerate(contornos):
        # Calcula a área do contorno
        area = cv2.contourArea(contorno)

# Calcula o perímetro do contorno
        perimetro = cv2.arcLength(contorno, True)

# Aproxima o contorno para determinar a forma
        forma = cv2.approxPolyDP(contorno, 0.04 * perimetro, True)

# Calcula a diferença de cor média na região do contorno
        mascara = np.zeros(imagem_cinza.shape, dtype=np.uint8)
        cv2.drawContours(mascara, [contorno], -1, (255), thickness=cv2.FILLED)
        media_cor = cv2.mean(imagem_cinza, mask=mascara)[0]

        # Armazena os resultados nas respectivas listas
        tamanhos.append(area)
        formas.append(len(forma))
        diferencas_cor.append(media_cor)

    print("Resultados armazenados.")

# Desenha os contornos encontrados na imagem original
    print("Desenha os contornos encontrados na imagem original.")
    for contorno in contornos:
        cv2.drawContours(imagem, [contorno], -1, (0, 255, 0), 2)

# Define os thresholds para contagem de células mais escuras e maiores
    print("Definindo os thresholds para contagem de células mais escuras e maiores.")
    limiar_diferenca_cor = 100
    limiar_tamanho = 500

# Conta o número de células que atendem aos thresholds
    print("Contando o número de células que atendem aos thresholds.")
    celulas_escuras = sum(diferenca_cor < limiar_diferenca_cor for diferenca_cor in diferencas_cor)
    celulas_maiores = sum(tamanho > limiar_tamanho for tamanho in tamanhos)

    # Prepara a string com os resultados
    print("Prepara a string com os resultados.")
    resultados = f"Células escuras: {celulas_escuras}\nCélulas maiores: {celulas_maiores}"


    # Obter a hora de término do processo
    hora_fim = datetime.datetime.now()
    print("Hora de término do processo:", hora_fim)

    # Calcular o tempo total de execução
    tempo_execucao = hora_fim - hora_inicio
    print("Tempo total de execução:", tempo_execucao)

    # Exibe a imagem com os contornos encontrados
    print("Exibindo a imagem com os contornos encontrados.")
    plt.imshow(cv2.cvtColor(imagem, cv2.COLOR_BGR2RGB))
    plt.axis('off')
    plt.show()

    # Exibe os resultados em uma janela gráfica
    print("Exibe os resultados em uma janela gráfica.")
    root = tk.Tk()
    root.title("Resultados da análise")

    label_resultados = tk.Label(root, text=resultados)
    label_resultados.pack()

    # Inicializa as listas para armazenar os resultados de tamanho, forma e diferença de cor

    print("Inicializa as listas para armazenar os resultados de tamanho, forma e diferença de cor.")
    tamanhos = []
    formas = []
    diferencas_cor = []

    # Loop sobre cada contorno encontrado
    print("Loop sobre cada contorno encontrado.")
    for i, contorno in enumerate(contornos):
        # Calcula a área do contorno
        area = cv2.contourArea(contorno)

        # Calcula o perímetro do contorno
        perimetro = cv2.arcLength(contorno, True)

        # Aproxima o contorno para determinar a forma
        forma = cv2.approxPolyDP(contorno, 0.04 * perimetro, True)

        # Calcula a diferença de cor média na região do contorno
        mascara = np.zeros(imagem_cinza.shape, dtype=np.uint8)
        cv2.drawContours(mascara, [contorno], -1, (255), thickness=cv2.FILLED)
        media_cor = cv2.mean(imagem_cinza, mask=mascara)[0]

        # Armazena os resultados nas respectivas listas
        tamanhos.append(area)
        formas.append(len(forma))
        diferencas_cor.append(media_cor)

        # Desenha os contornos encontrados na imagem original
        cv2.drawContours(imagem, [contorno], -1, (0, 255, 0), 2)

    # Define os thresholds para contagem de células mais escuras e maiores
    threshold_escuras = 100  # Defina o threshold desejado
    threshold_maiores = 200  # Defina o threshold desejado

    # Contagem de células mais escuras e maiores
    contagem_escuras = sum(diferenca_cor > threshold_escuras for diferenca_cor in diferencas_cor)
    contagem_maiores = sum(tamanho > threshold_maiores for tamanho in tamanhos)

    # Define os thresholds limite para nível de anormalidade
    threshold_escuras_limite = 3  # Defina o threshold limite desejado
    threshold_maiores_limite = 5  # Defina o threshold limite desejado

   # Nível de anormalidade
    nivel_anormalidade = "Baixo"
    if contagem_escuras > threshold_escuras_limite or contagem_maiores > threshold_maiores_limite:
        nivel_anormalidade = "Alto"

    # Diagnóstico
    diagnostico = "Normal"
    if nivel_anormalidade == "Alto":
        diagnostico = "Anomalia Detectada"

    print("calculando medidas.")

    medida_padrao = 0.05

    # Calcular a porcentagem em relação ao volume padrão
    porcentagem_volume = [(tamanho / medida_padrao) * 100 for tamanho in tamanhos]

    # Calcular a quantidade total de infestação com base no indivíduo de 100 kg
    peso_individual = 100  # kg
    quantidade_infestacao = sum(tamanhos) / medida_padrao * peso_individual

    # Calcular a porcentagem em relação aos 100 kg do paciente
    porcentagem_infestacao = (quantidade_infestacao / (peso_individual * 1000)) * 100

    # Mapear os níveis de infestação para as descrições correspondentes

    print("Mapear os níveis de infestação.")
    mapeamento_descricoes = {
        "hiperplasia": "aumento no número de células",
        "hipoplasia": "diminuição no número de células",
        "hipertrofia": "aumento no tamanho das células",
        "hipotrofia": "diminuição no tamanho das células",
        "atrofia": "diminuição no tamanho e no número de células",
        "metaplasia": "alteração no tipo de células",
        "acúmulos intracelulares": "acúmulo de substâncias dentro das células"
    }

    # Gerar descrição do nível de infestação

    descricoes_infestacao = []
    for parametro, descricao in mapeamento_descricoes.items():
        if parametro in diagnostico.lower():
            descricoes_infestacao.append(descricao)

    # Exibir os resultados individuais de cada célula
    for i in range(len(contornos)):
        descricao = ""
        if porcentagem_volume[i] < 100:
            descricao += "Atrofia celular, "
        if formas[i] != 4:
            descricao += "Metaplasia, "
        if diferencas_cor[i] > 0:
            descricao += "Acúmulos intracelulares"

        print(
            f"Célula {i + 1}: Tamanho = {porcentagem_volume[i]:.2f}%, Forma = {formas[i]}, Diferença de Cor = {diferencas_cor[i]:.2f}, {descricao}")

    def imprimir_resultados(celulas):
        for celula_info in banco_dados:
            # Extrai as informações da célula
            celula_id = int(celula_info.split(":")[0].split(" ")[1])
            tamanho = float(celula_info.split("Tamanho = ")[1].split("%")[0])
            forma = int(celula_info.split("Forma = ")[1].split(",")[0])
            dif_cor = float(celula_info.split("Diferença de Cor = ")[1].split(",")[0])
            diagnostico = celula_info.split(", ")[-1]

            # Cria um dicionário com as informações da célula e adiciona aos resultados
            resultados[celula_id] = {
                'tamanho': tamanho,
                'forma': forma,
                'dif_cor': dif_cor,
                'diagnostico': diagnostico
            }

    # Lê o conteúdo do arquivo de texto
    with open(r'\Users\Dell\PycharmProjects\validadorcartoes\cholangiocarcinoma.txt', 'r') as file:
        banco_dados = file.readlines()
    print("Arquivo de texto lido.")

         # Exibir a quantidade total de infestação
    print(f"Quantidade total de infestação: {quantidade_infestacao:.2f} g")
    print(f"Nível de infestação: {', '.join(descricoes_infestacao)}")

    # Cria o gráfico
    plt.figure()
    plt.plot(porcentagem_volume, 'r', label='Tamanho (em porcentagem)')
    plt.plot(diferencas_cor, 'g', label='Diferença de Cor')
    plt.xlabel('Células')
    plt.ylabel('Valores')
    plt.title('Detecção de Anomalias')
    plt.legend()

    # Exibe a imagem original com os contornos
    cv2.imshow("Imagem com Contornos", imagem)
    cv2.waitKey(0)
    root.mainloop()

def comparar_resultados(resultados, banco_dados):
    for celula_info in banco_dados:
        # Extrai as informações da célula do arquivo de texto
        celula_id = int(celula_info.split(":")[0].split(" ")[1])
        tamanho = float(celula_info.split("Tamanho = ")[1].split("%")[0])
        forma = int(celula_info.split("Forma = ")[1].split(",")[0])
        dif_cor = float(celula_info.split("Diferença de Cor = ")[1].split(",")[0])
        diagnostico = celula_info.split(", ")[-1]

        # Compara as informações da célula com os resultados obtidos
        if (
            resultados[celula_id]['tamanho'] == tamanho and
            resultados[celula_id]['forma'] == forma and
            resultados[celula_id]['dif_cor'] == dif_cor and
            resultados[celula_id]['diagnostico'] == diagnostico
        ):
            print(f"Célula {celula_id} - Resultado correto")
        else:
            print(f"Célula {celula_id} - Resultado incorreto")

    # Chame a função de comparação após obter os resultados
    comparar_resultados(resultados, banco_dados)


    # Exibir os resultados na interface gráfica
    result_label.config(text="Resultado da análise: " + diagnostico)

    # Função para exibir a imagem original com os contornos
def exibir_imagem_com_contornos():
    # Carrega a imagem de exemplo
    imagem = cv2.imread(r'\Users\Dell\PycharmProjects\validadorcartoes\imagem.png')

    # Converte a imagem para o formato aceito pelo Tkinter
    imagem_rgb = cv2.cvtColor(imagem, cv2.COLOR_BGR2RGB)
    img = Image.fromarray(imagem_rgb)

    # Redimensiona a imagem para exibir na interface
    img = img.resize((400, 300), Image.LANCZOS)  # Substituído Image.ANTIALIAS por Image.LANCZOS

    # Cria um objeto de imagem Tkinter
    img_tk = ImageTk.PhotoImage(img)

    # Cria um rótulo na janela principal para exibir a imagem
    image_label = tk.Label(root, image=img_tk)
    image_label.image = img_tk
    image_label.pack()


# Cria a janela principal do aplicativo
root = tk.Tk()

# Cria um botão "Oncologia" na janela principal
oncologia_button = tk.Button(root, text="Oncologia", command=analisar_amostra)
oncologia_button.pack()

# Exibe a imagem com contornos quando a janela é aberta
exibir_imagem_com_contornos()

# Cria um rótulo para exibir o resultado da análise
result_label = tk.Label(root, text="Resultado da análise: ")
result_label.pack()

# Inicia o loop principal da interface gráfica
root.mainloop()

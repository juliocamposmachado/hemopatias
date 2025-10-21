from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64
from datetime import datetime
import io
from PIL import Image

app = Flask(__name__)
CORS(app)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "timestamp": datetime.now().isoformat()})

@app.route('/api/analyze', methods=['POST'])
def analyze_image():
    try:
        if 'image' not in request.files:
            return jsonify({"error": "Nenhuma imagem foi enviada"}), 400

        file = request.files['image']

        if file.filename == '':
            return jsonify({"error": "Nome de arquivo vazio"}), 400

        hora_inicio = datetime.now()
        print(f"Hora de início do processo: {hora_inicio}")

        image_bytes = file.read()
        nparr = np.frombuffer(image_bytes, np.uint8)
        imagem = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if imagem is None:
            return jsonify({"error": "Não foi possível processar a imagem"}), 400

        print("Imagem carregada.")

        imagem_cinza = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
        print("Imagem convertida para escala de cinza.")

        _, imagem_limiarizada = cv2.threshold(
            imagem_cinza, 0, 255,
            cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU
        )
        print("Imagem limiarizada.")

        contornos, _ = cv2.findContours(
            imagem_limiarizada,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )
        print(f"Contornos encontrados: {len(contornos)}")

        tamanhos = []
        formas = []
        diferencas_cor = []
        celulas_detalhes = []

        for i, contorno in enumerate(contornos):
            area = cv2.contourArea(contorno)

            if area < 50:
                continue

            perimetro = cv2.arcLength(contorno, True)
            forma = cv2.approxPolyDP(contorno, 0.04 * perimetro, True)

            mascara = np.zeros(imagem_cinza.shape, dtype=np.uint8)
            cv2.drawContours(mascara, [contorno], -1, (255), thickness=cv2.FILLED)
            media_cor = cv2.mean(imagem_cinza, mask=mascara)[0]

            tamanhos.append(area)
            formas.append(len(forma))
            diferencas_cor.append(media_cor)

            cv2.drawContours(imagem, [contorno], -1, (0, 255, 0), 2)

            medida_padrao = 0.05
            porcentagem_volume = (area / medida_padrao) * 100

            descricao = []
            if porcentagem_volume < 100:
                descricao.append("Atrofia celular")
            if len(forma) != 4:
                descricao.append("Metaplasia")
            if media_cor > 0:
                descricao.append("Acúmulos intracelulares")

            celulas_detalhes.append({
                "id": i + 1,
                "tamanho": round(area, 2),
                "porcentagem_volume": round(porcentagem_volume, 2),
                "forma": len(forma),
                "diferenca_cor": round(media_cor, 2),
                "descricao": ", ".join(descricao) if descricao else "Normal"
            })

        limiar_diferenca_cor = 100
        limiar_tamanho = 500

        celulas_escuras = sum(1 for dc in diferencas_cor if dc < limiar_diferenca_cor)
        celulas_maiores = sum(1 for t in tamanhos if t > limiar_tamanho)

        threshold_escuras = 100
        threshold_maiores = 200

        contagem_escuras = sum(1 for dc in diferencas_cor if dc > threshold_escuras)
        contagem_maiores = sum(1 for t in tamanhos if t > threshold_maiores)

        threshold_escuras_limite = 3
        threshold_maiores_limite = 5

        nivel_anormalidade = "Baixo"
        if contagem_escuras > threshold_escuras_limite or contagem_maiores > threshold_maiores_limite:
            nivel_anormalidade = "Alto"

        diagnostico = "Normal"
        if nivel_anormalidade == "Alto":
            diagnostico = "Anomalia Detectada"

        medida_padrao = 0.05
        peso_individual = 100
        quantidade_infestacao = sum(tamanhos) / medida_padrao * peso_individual
        porcentagem_infestacao = (quantidade_infestacao / (peso_individual * 1000)) * 100

        _, buffer = cv2.imencode('.png', imagem)
        imagem_processada_base64 = base64.b64encode(buffer).string()

        _, buffer_cinza = cv2.imencode('.png', imagem_cinza)
        imagem_cinza_base64 = base64.b64encode(buffer_cinza).decode('utf-8')

        _, buffer_limiarizada = cv2.imencode('.png', imagem_limiarizada)
        imagem_limiarizada_base64 = base64.b64encode(buffer_limiarizada).decode('utf-8')

        hora_fim = datetime.now()
        tempo_execucao = (hora_fim - hora_inicio).total_seconds()

        print(f"Hora de término: {hora_fim}")
        print(f"Tempo de execução: {tempo_execucao} segundos")

        resultado = {
            "sucesso": True,
            "diagnostico": diagnostico,
            "nivel_anormalidade": nivel_anormalidade,
            "estatisticas": {
                "total_celulas": len(celulas_detalhes),
                "celulas_escuras": celulas_escuras,
                "celulas_maiores": celulas_maiores,
                "contagem_escuras": contagem_escuras,
                "contagem_maiores": contagem_maiores,
                "quantidade_infestacao_g": round(quantidade_infestacao, 2),
                "porcentagem_infestacao": round(porcentagem_infestacao, 4)
            },
            "celulas": celulas_detalhes[:50],
            "imagens": {
                "processada": f"data:image/png;base64,{imagem_processada_base64}",
                "cinza": f"data:image/png;base64,{imagem_cinza_base64}",
                "limiarizada": f"data:image/png;base64,{imagem_limiarizada_base64}"
            },
            "tempo_processamento": round(tempo_execucao, 2),
            "timestamp": hora_fim.isoformat()
        }

        return jsonify(resultado)

    except Exception as e:
        print(f"Erro durante análise: {str(e)}")
        return jsonify({
            "sucesso": False,
            "error": f"Erro ao processar imagem: {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

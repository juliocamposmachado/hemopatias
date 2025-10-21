import { useState } from 'react';
import { Upload, Loader2, AlertCircle, CheckCircle, Download, Image as ImageIcon, BarChart3, Activity } from 'lucide-react';

interface AnalysisResult {
  sucesso: boolean;
  diagnostico: string;
  nivel_anormalidade: string;
  estatisticas: {
    total_celulas: number;
    celulas_escuras: number;
    celulas_maiores: number;
    contagem_escuras: number;
    contagem_maiores: number;
    quantidade_infestacao_g: number;
    porcentagem_infestacao: number;
  };
  celulas: Array<{
    id: number;
    tamanho: number;
    porcentagem_volume: number;
    forma: number;
    diferenca_cor: number;
    descricao: string;
  }>;
  imagens: {
    processada: string;
    cinza: string;
    limiarizada: string;
  };
  tempo_processamento: number;
}

export default function ImageAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState('http://localhost:5000');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Por favor, selecione uma imagem primeiro');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch(`${apiUrl}/api/analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao processar imagem');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Erro ao conectar com o servidor. Verifique se a API está rodando.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const downloadResults = () => {
    if (!result) return;

    const dataStr = JSON.stringify(result, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analise_${new Date().getTime()}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Análise de Amostras Celulares
          </h1>
          <p className="text-lg text-gray-600">
            Faça upload de uma imagem para análise automatizada
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL da API (opcional)
            </label>
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="http://localhost:5000"
            />
            <p className="text-xs text-gray-500 mt-1">
              Se você fez deploy da API, insira a URL aqui. Caso contrário, use http://localhost:5000
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Clique para fazer upload
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG ou JPEG (máx. 10MB)
              </p>
            </label>
          </div>

          {previewUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Imagem Selecionada</h3>
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto rounded-lg border border-gray-200 shadow-md"
              />
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5" />
                    Iniciar Análise
                  </>
                )}
              </button>
            </div>
          )}

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-900">Erro</p>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}
        </div>

        {result && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Resultados da Análise</h2>
                <button
                  onClick={downloadResults}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Baixar JSON
                </button>
              </div>

              <div className={`mb-6 p-6 rounded-xl border-2 ${
                result.nivel_anormalidade === 'Alto'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  {result.nivel_anormalidade === 'Alto' ? (
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Diagnóstico: {result.diagnostico}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nível de Anormalidade: {result.nivel_anormalidade}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Tempo de processamento: {result.tempo_processamento}s
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total de Células</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.estatisticas.total_celulas}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Células Escuras</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {result.estatisticas.celulas_escuras}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Células Maiores</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {result.estatisticas.celulas_maiores}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Infestação</p>
                  <p className="text-3xl font-bold text-red-600">
                    {result.estatisticas.quantidade_infestacao_g.toFixed(2)}g
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Imagem Processada
                  </h3>
                  <img
                    src={result.imagens.processada}
                    alt="Processada"
                    className="w-full rounded-lg border border-gray-200 shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Escala de Cinza
                  </h3>
                  <img
                    src={result.imagens.cinza}
                    alt="Cinza"
                    className="w-full rounded-lg border border-gray-200 shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Limiarizada
                  </h3>
                  <img
                    src={result.imagens.limiarizada}
                    alt="Limiarizada"
                    className="w-full rounded-lg border border-gray-200 shadow-md"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Detalhes das Células (primeiras 10)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">Tamanho</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">Volume %</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">Forma</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">Cor</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-700">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {result.celulas.slice(0, 10).map((celula) => (
                        <tr key={celula.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3">{celula.id}</td>
                          <td className="px-4 py-3">{celula.tamanho.toFixed(2)}</td>
                          <td className="px-4 py-3">{celula.porcentagem_volume.toFixed(2)}%</td>
                          <td className="px-4 py-3">{celula.forma}</td>
                          <td className="px-4 py-3">{celula.diferenca_cor.toFixed(2)}</td>
                          <td className="px-4 py-3 text-gray-600">{celula.descricao}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

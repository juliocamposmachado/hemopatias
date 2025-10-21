import { Microscope, Brain, LineChart, Code, Database, Zap, Activity, Mail, Github, BookOpen, Users, Target, ChevronRight, Play, MessageCircle, ExternalLink, Scan } from 'lucide-react';
import { useState } from 'react';
import ChatAssistant from './components/ChatAssistant';
import ImageAnalysis from './components/ImageAnalysis';


function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (showAnalysis) {
    return (
      <div>
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowAnalysis(false)}>
              <Microscope className="w-7 h-7 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Hemopatias</span>
            </div>
            <button
              onClick={() => setShowAnalysis(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Voltar ao Site
            </button>
          </div>
        </nav>
        <ImageAnalysis />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (    
    <div className="min-h-screen bg-white">      
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="w-7 h-7 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Hemopatias</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#funcionamento" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#aplicacoes" className="text-gray-600 hover:text-blue-600 transition-colors">Aplicações</a>
            <a href="#tecnologias" className="text-gray-600 hover:text-blue-600 transition-colors">Tecnologias</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
            <button
              onClick={() => setShowAnalysis(true)}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Scan className="w-4 h-4" />
              Analisar Imagem
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Inteligência Artificial em Medicina Diagnóstica
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hemopatias
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Análise automatizada de amostras celulares com precisão e velocidade
            </p>

 <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="aspect-video rounded-lg overflow-hidden">

              
  <div className="flex flex-col justify-center items-center space-y-8 my-8">
  <iframe
    className="rounded-lg shadow-lg"
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/vxNeO3LAzqI?si=4WzBZ_tuoeu2bmW_"
     src="https://www.youtube-nocookie.com/embed/kvI661vPmi8?si=5I4etsJ2sLGzgKg2"
    title="Vídeo 1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>

  <iframe
    className="rounded-lg shadow-lg"
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/kvI661vPmi8?si=5I4etsJ2sLGzgKg2"
    title="Vídeo 2"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

   </div>
        
        </div>
      </section>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowAnalysis(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <Scan className="w-5 h-5" />
                Analisar Imagem Agora
              </button>
              <a href="#demo" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-medium border border-gray-200">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </a>
              <a href="https://github.com/juliocamposmachado/hemopatias" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-medium border border-gray-200">
                <Github className="w-5 h-5" />
                Repositório
              </a>
            </div>
          </div>                 
             
             
                 
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre o Projeto</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O projeto Hemopatias utiliza técnicas avançadas de visão computacional e inteligência artificial para realizar análise automatizada de amostras celulares, oferecendo suporte preciso e rápido ao diagnóstico médico.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Objetivo</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatizar a análise de amostras celulares para diagnóstico de hemopatias, reduzindo tempo e aumentando precisão.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Motivação</h3>
              <p className="text-gray-600 leading-relaxed">
                Apoiar profissionais da saúde com tecnologia de ponta, permitindo diagnósticos mais rápidos e decisões clínicas mais informadas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equipe</h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvido por pesquisadores em engenharia biotecnológica com foco em inovação médica.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-blue-600 italic">
              "Transformando dados em diagnósticos"
            </p>
          </div>
        </div>
      </section>

      <section id="funcionamento" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Como Funciona</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Processo completo de análise automatizada, desde o carregamento da imagem até o diagnóstico final.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { icon: Database, title: 'Carregamento da Imagem', desc: 'Sistema recebe a imagem da amostra celular em formato digital' },
              { icon: Microscope, title: 'Segmentação e Detecção', desc: 'Algoritmos de visão computacional identificam e isolam células individuais' },
              { icon: LineChart, title: 'Análise Morfológica', desc: 'Cálculo automático de métricas: área, perímetro, forma, diferença de cor e densidade' },
              { icon: Brain, title: 'Classificação Celular', desc: 'Identificação de anomalias: hiperplasia, atrofia, metaplasia e acúmulos intracelulares' },
              { icon: Activity, title: 'Validação Clínica', desc: 'Comparação com banco de dados de casos conhecidos para confirmar diagnóstico' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx < 4 && <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aplicacoes" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Aplicações Médicas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tecnologia aplicada em diversas áreas da medicina diagnóstica e oncologia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Diagnóstico Oncológico', desc: 'Detecção precoce de leucemias, linfomas e colangiocarcinoma' },
              { title: 'Análise de Alterações Celulares', desc: 'Identificação de hiperplasia, hipoplasia, hipertrofia e atrofia' },
              { title: 'Quantificação de Infestação', desc: 'Estimativa precisa do nível de comprometimento celular no organismo' },
              { title: 'Apoio à Decisão Clínica', desc: 'Suporte baseado em dados para profissionais da saúde' },
              { title: 'Detecção de Metaplasia', desc: 'Identificação de alterações no tipo celular' },
              { title: 'Análise de Acúmulos Intracelulares', desc: 'Detecção de substâncias anormais dentro das células' }
            ].map((app, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stack tecnológico robusto para processamento de imagens e análise de dados médicos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Python', desc: 'Linguagem principal para processamento e análise' },
              { name: 'OpenCV', desc: 'Biblioteca de visão computacional para segmentação celular' },
              { name: 'NumPy', desc: 'Computação numérica e manipulação de arrays multidimensionais' },
              { name: 'Matplotlib', desc: 'Visualização de dados e geração de gráficos analíticos' },
              { name: 'Tkinter', desc: 'Interface gráfica para interação com o sistema' },
              { name: 'PIL/Pillow', desc: 'Processamento e manipulação de imagens' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Demonstração</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Visualização do processo de análise e resultados obtidos pelo sistema.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Interface do Sistema</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/90c32393-b69f-4cc2-94b1-f56291783d46"
                    alt="Interface Principal do Sistema"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center">Interface principal de análise</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/e764bc92-24aa-4fb4-85c1-e427bf652d7e"
                    alt="Menu de Opções"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center">Menu de funcionalidades</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Processo de Análise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/261c561f-aa2f-4959-bc08-cab3118eab7c"
                    alt="Imagem Original"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">1. Imagem original da amostra</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/949ff6a7-ee8e-4017-b10d-d23e279280ba"
                    alt="Conversão para Escala de Cinza"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">2. Conversão para escala de cinza</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/8b6d74ce-5b7a-4a8e-a260-49f903ef1e50"
                    alt="Limiarização"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">3. Limiarização da imagem</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/e788c6ea-5b11-4a28-8bd8-5213af8bf80e"
                    alt="Detecção de Contornos"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">4. Detecção de contornos celulares</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/651e7f47-45c0-4a20-b4b8-836e06e43921"
                    alt="Marcação de Células"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">5. Marcação das células identificadas</p>
                </div>
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/9d307ad2-3264-4a1a-9c1f-31fd73571abb"
                    alt="Resultado Final"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">6. Resultado com análise completa</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dados da Análise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <img
                    src="https://github.com/AstridNielsen-lab/hemopatias/assets/32886080/fb2ca796-2e24-4bb9-8dc8-6f29d14a234c"
                    alt="Tabela de Métricas"
                    className="w-full rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-gray-600 text-center">Métricas morfológicas detalhadas</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Resultados da Análise</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Células Detectadas</p>
                      <p className="text-3xl font-bold text-blue-600">127</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Células Anômalas</p>
                      <p className="text-3xl font-bold text-orange-600">8</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Precisão do Sistema</p>
                      <p className="text-3xl font-bold text-green-600">94%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="repositorio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Código Aberto</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore o código-fonte e contribua para o desenvolvimento do projeto.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Github className="w-12 h-12 text-gray-900" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">GitHub Repository</h3>
                  <p className="text-gray-600">Acesse documentação completa e instruções de uso</p>
                </div>
              </div>
              <a href="https://github.com/juliocamposmachado/hemopatias" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Ver Repositório
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tem dúvidas ou quer saber mais sobre o projeto? Entre em contato conosco.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Junte-se ao Nosso Grupo de Pesquisa</h2>
              </div>
              <p className="text-green-50 text-lg">Engenharia Biotecnológica</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Venha fazer parte dessa jornada emocionante e descobrir as infinitas possibilidades da biotecnologia!
                Estamos ansiosos para conhecer você e compartilhar conhecimentos e experiências nesse campo fascinante.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">O que você encontrará no grupo:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Discussões sobre projetos inovadores em biotecnologia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Compartilhamento de conhecimentos e experiências</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Networking com pesquisadores e profissionais da área</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Acesso a recursos e materiais de estudo</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://chat.whatsapp.com/EpXVaaIbRiXHK0uubbVu16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg w-full justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Entrar no Grupo WhatsApp
                <ChevronRight className="w-5 h-5" />
              </a>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Seja bem-vindo ao nosso grupo de Biotecnologia!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Microscope className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Hemopatias</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Inteligência Artificial aplicada à medicina diagnóstica para um futuro mais saudável.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <a href="https://pt.wikipedia.org/wiki/Colangiocarcinoma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Colangiocarcinoma
                </a>
                <a href="https://chat.openai.com/c/c97e485a-5059-4d6d-9df6-531c69a19c8f" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Exames Instantâneos
                </a>
                <a href="https://chat.openai.com/c/c050de9e-c76c-4b30-abb7-f728b568f25a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Biobanco de Patologias
                </a>
                <a href="https://chat.whatsapp.com/EpXVaaIbRiXHK0uubbVu16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-3 h-3" />
                  Grupo de Pesquisa
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                  Documentação
                </a>
                <a href="https://github.com/juliocamposmachado/hemopatias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Like Look Solutions
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400 space-y-3">
              <p className="text-sm">
                © {new Date().getFullYear()} Hemopatias. Todos os direitos reservados.
              </p>
              <p className="text-xs">
                Desenvolvido por <span className="text-blue-400 font-medium">Julio Campos Machado</span> | <a href="mailto:juliocamposmachado@gmail.com" className="hover:text-white transition-colors">juliocamposmachado@gmail.com</a>
              </p>
              <p className="text-xs">
                WhatsApp: <a href="https://wa.me/5511970603441" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 11 97060-3441</a> | <a href="https://wa.me/5511992946628" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 11 99294-6628</a>
              </p>
              <p className="text-xs italic mt-2">
                Este software é destinado para fins educacionais e de pesquisa. Não substitui diagnóstico médico profissional.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <ChatAssistant />
    </div>
  );
}

export default App;

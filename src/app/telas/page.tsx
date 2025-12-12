'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, AlertTriangle, Clock, Heart, ArrowRight, Shield, Zap } from 'lucide-react';

export default function TelasIntroPage() {
  const router = useRouter();

  const handleViewRecommendations = () => {
    router.push('/telas/recomendacoes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-cyan-500" />
            <h1 className="text-3xl font-bold text-gray-800">Uso de Telas</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Orientações sobre tempo de tela, riscos e estratégias seguras para crianças de 0 a 5 anos.
          </p>
        </div>

        {/* Recomendações por idade */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-500" />
              Recomendações por Idade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">0-18m</div>
                <div className="text-lg font-semibold text-red-800 mb-1">0 minutos</div>
                <p className="text-sm text-red-700">Não recomendado</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-2">18-24m</div>
                <div className="text-lg font-semibold text-yellow-800 mb-1">30-60 min</div>
                <p className="text-sm text-yellow-700">Com supervisão</p>
              </div>
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">2-5 anos</div>
                <div className="text-lg font-semibold text-green-800 mb-1">1 hora</div>
                <p className="text-sm text-green-700">Conteúdo educativo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Por que limitar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Por que estabelecer limites?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Riscos do Excesso:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-gray-700">Problemas de sono e irritabilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-gray-700">Atraso no desenvolvimento da linguagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-gray-700">Dificuldades de atenção e concentração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-gray-700">Redução da criatividade</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Benefícios dos Limites:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span className="text-gray-700">Melhor desenvolvimento cognitivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span className="text-gray-700">Sono de melhor qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span className="text-gray-700">Maior criatividade e imaginação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span className="text-gray-700">Interações sociais mais ricas</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estratégias práticas */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Estratégias Práticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Para os Pais:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Defina regras claras e consistentes</li>
                  <li>• Dê o exemplo - limite seu próprio uso</li>
                  <li>• Crie rotinas sem telas</li>
                  <li>• Use telas como recompensa, não como babá</li>
                  <li>• Supervisione sempre o conteúdo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                  Para as Crianças:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Explique as regras de forma positiva</li>
                  <li>• Ofereça alternativas atraentes</li>
                  <li>• Incentive brincadeiras criativas</li>
                  <li>• Crie momentos especiais sem telas</li>
                  <li>• Elogie quando respeitam as regras</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timer Tool */}
        <Card className="mb-8 border-cyan-200 bg-cyan-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-800">
              <Clock className="w-5 h-5 text-cyan-600" />
              Ferramenta de Timer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-cyan-800 mb-4">
              Configure limites automáticos e crie rotinas saudáveis:
            </p>
            <ul className="space-y-2 text-cyan-700">
              <li>• Aplicativos de controle parental</li>
              <li>• Timers visuais para crianças</li>
              <li>• Modo "hora sem tela" antes de dormir</li>
              <li>• Alertas de aviso antes do fim do tempo</li>
              <li>• Bloqueio automático de dispositivos</li>
            </ul>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={handleViewRecommendations}
            className="px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Ver Recomendações Detalhadas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => router.back()}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
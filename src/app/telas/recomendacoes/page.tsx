'use client';

import { useRouter } from 'next/navigation';
import { screenRecommendations, screenRisks, screenStrategies, timerTips } from '@/lib/screens-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  AlertTriangle,
  Shield,
  Clock,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Timer,
  Moon,
  Sun
} from 'lucide-react';

export default function TelasRecomendacoesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="flex items-center gap-3">
            <Monitor className="w-8 h-8 text-cyan-500" />
            <h1 className="text-3xl font-bold text-gray-800">Recomendações de Telas</h1>
          </div>
        </div>

        {/* Recomendações por idade */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Limites por Idade</h2>
          <div className="space-y-6">
            {screenRecommendations.map((rec, index) => (
              <Card key={index} className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{rec.ageRange}</span>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {rec.maxTime}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Orientações
                      </h4>
                      <ul className="space-y-2">
                        {rec.guidelines.map((guideline, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            {guideline}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Riscos
                      </h4>
                      <ul className="space-y-2">
                        {rec.risks.map((risk, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        Estratégias
                      </h4>
                      <ul className="space-y-2">
                        {rec.strategies.map((strategy, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Riscos gerais */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Riscos do Excesso de Telas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {screenRisks.map((risk, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-800">{risk}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Estratégias gerais */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Estratégias Gerais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {screenStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{strategy}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timer Tool */}
        <Card className="mb-8 border-cyan-200 bg-cyan-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-800">
              <Timer className="w-5 h-5 text-cyan-600" />
              Ferramenta de Controle de Tempo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-cyan-800">
                Use tecnologias para ajudar no controle do tempo de tela:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {timerTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-cyan-600 mt-1 flex-shrink-0" />
                    <span className="text-cyan-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modo No Screen */}
        <Card className="mb-8 border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800">
              <Moon className="w-5 h-5 text-indigo-600" />
              Modo "Rotina do Sono" - Sem Telas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-indigo-800">
                Crie uma rotina noturna saudável bloqueando telas automaticamente:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    Durante o Dia:
                  </h4>
                  <ul className="space-y-2 text-sm text-indigo-700">
                    <li>• Configure limite diário de telas</li>
                    <li>• Permita uso supervisionado</li>
                    <li>• Incentive brincadeiras offline</li>
                    <li>• Crie horários específicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-500" />
                    À Noite:
                  </h4>
                  <ul className="space-y-2 text-sm text-indigo-700">
                    <li>• Bloqueio automático 1h antes de dormir</li>
                    <li>• Modo "hora da família" sem telas</li>
                    <li>• Rotina de relaxamento</li>
                    <li>• Leitura ou conversa antes de dormir</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aviso importante */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
          <p className="text-sm text-yellow-800 text-center">
            <strong>Lembre-se:</strong> As telas podem ser ferramentas úteis quando usadas com moderação
            e supervisão. O equilíbrio entre mundo digital e real é fundamental para o desenvolvimento saudável.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => router.push('/telas')}
          >
            Voltar às Orientações
          </Button>
          <Button
            onClick={() => router.push('/home')}
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  );
}
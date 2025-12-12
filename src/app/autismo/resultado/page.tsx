'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Home,
  Stethoscope,
  Users,
  BookOpen
} from 'lucide-react';

interface QuizResult {
  score: number;
  level: string;
  message: string;
  answers: Record<string, string>;
  completedAt: string;
}

export default function AutismoResultadoPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem('autism_quiz_result');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      router.push('/autismo');
    }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="animate-pulse text-center">
          <Brain className="w-16 h-16 mx-auto text-purple-400 mb-4" />
          <p className="text-gray-600">Carregando resultado...</p>
        </div>
      </div>
    );
  }

  const getResultColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getResultIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'moderate': return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'high': return <Info className="w-6 h-6 text-orange-600" />;
      default: return <Info className="w-6 h-6 text-gray-600" />;
    }
  };

  const getNextActions = (level: string) => {
    const actions = {
      low: [
        'Continue acompanhando o desenvolvimento da criança normalmente',
        'Mantenha consultas de puericultura em dia',
        'Estimule brincadeiras e interações sociais',
        'Reforce a comunicação e linguagem'
      ],
      moderate: [
        'Aumente a observação dos sinais identificados',
        'Consulte o pediatra para discutir as observações',
        'Considere avaliação por especialista se houver preocupação',
        'Busque orientação sobre desenvolvimento infantil'
      ],
      high: [
        'Procure avaliação especializada o mais breve possível',
        'Consulte neuropediatra ou psicólogo infantil',
        'Informe-se sobre serviços de intervenção precoce',
        'Não espere - quanto antes, melhor o prognóstico'
      ]
    };
    return actions[level as keyof typeof actions] || actions.moderate;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-800">Resultado do Checklist</h1>
          </div>
        </div>

        {/* Result Card */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {getResultIcon(result.level)}
              <Badge className={`text-lg px-4 py-2 ${getResultColor(result.level)}`}>
                {result.level === 'low' ? 'Perfil Típico' :
                 result.level === 'moderate' ? 'Observar' : 'Atenção Necessária'}
              </Badge>
            </div>
            <CardTitle className="text-2xl text-gray-800">
              Pontuação: {result.score.toFixed(1)} / 12
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 mb-4">{result.message}</p>
            <p className="text-sm text-gray-600">
              Questionário respondido em {new Date(result.completedAt).toLocaleDateString('pt-BR')}
            </p>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Lembre-se: Este NÃO é um diagnóstico!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-red-800">
              <p>
                <strong>Este resultado não substitui avaliação profissional.</strong>
                Apenas profissionais qualificados podem fazer diagnóstico de TEA.
              </p>
              <p>
                Cada criança é única e pode apresentar sinais de desenvolvimento de forma diferente.
                O importante é o acompanhamento regular e individualizado.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Next Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-purple-500" />
              Próximos Passos Recomendados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {getNextActions(result.level).map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Professional Help */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Stethoscope className="w-5 h-5 text-blue-600" />
              Quando procurar ajuda profissional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Pediatra</h4>
                <p className="text-sm text-blue-700">
                  Primeiro profissional a consultar. Pode orientar sobre desenvolvimento e indicar especialistas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Neuropediatra</h4>
                <p className="text-sm text-blue-700">
                  Especialista em desenvolvimento neurológico infantil.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Psicólogo Infantil</h4>
                <p className="text-sm text-blue-700">
                  Avalia desenvolvimento cognitivo, emocional e comportamental.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Fonoaudiólogo</h4>
                <p className="text-sm text-blue-700">
                  Especialista em comunicação e linguagem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-500" />
              Recursos e Informações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-gray-700">
                Para mais informações sobre TEA e desenvolvimento infantil:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Autismo & Realidade:</strong> Associação brasileira de apoio</li>
                <li>• <strong>Ministério da Saúde:</strong> Orientações sobre desenvolvimento infantil</li>
                <li>• <strong>Sociedade Brasileira de Pediatria:</strong> Diretrizes atualizadas</li>
                <li>• <strong>Livros:</strong> "O que é Autismo" e outros materiais educativos</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.push('/home')}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push('/autismo')}
            className="flex items-center gap-2"
          >
            <Brain className="w-4 h-4" />
            Refazer Questionário
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            Este checklist é baseado em ferramentas de screening reconhecidas internacionalmente,
            mas não substitui avaliação profissional completa.
          </p>
        </div>
      </div>
    </div>
  );
}
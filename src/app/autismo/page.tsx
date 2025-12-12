'use client';

import { useRouter } from 'next/navigation';
import { Baby, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AutismoIntroPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/desenvolvimento')}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Voltar
            </button>
            <button
              onClick={() => router.push('/home')}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-2 hover:scale-110 transition-transform"
            >
              <Home className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        {/* Ilustração de Criança Brincando */}
        <div className="relative mx-auto w-64 h-64 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="relative flex items-center justify-center h-full">
            <div className="relative">
              <Heart className="w-20 h-20 text-pink-400 absolute -top-6 -right-6 opacity-40" />
              <Baby className="w-40 h-40 text-purple-500" />
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-2xl">🧩</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Checklist de Observação
          </h1>

          {/* Texto Seguro */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-blue-700">Este checklist não faz diagnóstico.</strong>
              <br />
              <br />
              Ele ajuda você a observar comportamentos do seu pequeno e identificar sinais que podem ser importantes para conversar com o pediatra ou especialista.
            </p>
          </div>

          {/* Informações Adicionais */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Observação Acolhedora
                </h3>
                <p className="text-sm text-gray-600">
                  O checklist é baseado em marcos de desenvolvimento e sinais que profissionais de saúde observam.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Sem Julgamentos
                </h3>
                <p className="text-sm text-gray-600">
                  Cada criança se desenvolve no seu próprio ritmo. Este é apenas um guia de observação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-100 rounded-full p-2 mt-1">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Próximos Passos
                </h3>
                <p className="text-sm text-gray-600">
                  Se você tiver dúvidas após o checklist, converse com o pediatra ou busque um especialista em desenvolvimento infantil.
                </p>
              </div>
            </div>
          </div>

          {/* Botão: Iniciar Checklist */}
          <Button
            onClick={() => router.push('/autismo/checklist')}
            size="lg"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Iniciar Checklist
          </Button>
        </div>

        {/* Aviso Legal */}
        <div className="bg-gray-100 rounded-2xl p-6">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            <strong>Aviso:</strong> Este checklist é apenas uma ferramenta de observação e não substitui avaliação médica profissional. Sempre consulte um pediatra ou especialista para diagnóstico e orientações adequadas.
          </p>
        </div>
      </div>
    </div>
  );
}

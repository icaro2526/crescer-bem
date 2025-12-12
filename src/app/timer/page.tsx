'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

export default function TimerTool() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <Clock className="w-12 h-12 text-blue-500 mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Timer de Sono/Tela</h1>
          </div>
          <p className="text-gray-600 mb-8">
            Ferramenta prática para controlar o tempo de tela e criar rotinas de sono saudáveis.
          </p>
          {/* Adicionar funcionalidade do timer aqui */}
          <Button
            onClick={() => router.goBack()}
            variant="outline"
            className="mt-8"
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, Shield, Heart } from 'lucide-react';

export default function AvisoLegalPage() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Ícone de aviso */}
          <div className="flex justify-center mb-6">
            <div className="bg-amber-100 rounded-full p-4">
              <AlertTriangle className="w-12 h-12 text-amber-600" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Aviso Importante
          </h1>

          {/* Conteúdo do aviso */}
          <div className="space-y-6 mb-8">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-amber-800">Este aplicativo oferece informações educativas e não substitui avaliação profissional.</strong>
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Não fazemos diagnósticos</h3>
                  <p className="text-sm">
                    As informações fornecidas são apenas orientativas. Somente profissionais de saúde podem diagnosticar condições médicas.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Não prescrevemos tratamentos</h3>
                  <p className="text-sm">
                    Não recomendamos medicamentos, chás, receitas caseiras ou suplementos. Sempre consulte um pediatra.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Em caso de emergência</h3>
                  <p className="text-sm">
                    Procure atendimento médico imediatamente. Ligue para 192 (SAMU) ou dirija-se ao pronto-socorro mais próximo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Nosso objetivo:</strong> Fornecer informações baseadas em evidências científicas para ajudar você a acompanhar o desenvolvimento do seu filho e saber quando buscar ajuda profissional.
              </p>
            </div>
          </div>

          {/* Checkbox de concordância */}
          <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
            <Checkbox
              id="terms"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 cursor-pointer leading-relaxed"
            >
              Li e compreendi que este aplicativo oferece apenas informações educativas e não substitui consultas médicas. Em caso de dúvidas ou emergências, procurarei atendimento profissional.
            </label>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              size="lg"
              className="flex-1 rounded-xl"
            >
              Voltar
            </Button>
            <Button
              onClick={() => router.push('/quiz')}
              disabled={!accepted}
              size="lg"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

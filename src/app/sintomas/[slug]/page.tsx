'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSymptomById, Symptom } from '@/lib/symptoms-data';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function SintomaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [symptom, setSymptom] = useState<Symptom | null>(null);

  useEffect(() => {
    if (params.slug) {
      const foundSymptom = getSymptomById(params.slug as string);
      setSymptom(foundSymptom || null);
    }
  }, [params.slug]);

  if (!symptom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-6">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sintoma não encontrado</h1>
          <p className="text-gray-600 mb-4">O sintoma solicitado não foi encontrado.</p>
          <Button 
            onClick={() => router.push('/sintomas')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Voltar para Sintomas
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">{symptom.name}</h1>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* O que é */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">O que é</h2>
          <p className="text-[#555] leading-relaxed">{symptom.what}</p>
        </div>

        {/* Cuidados seguros */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cuidados seguros</h2>
          <div className="space-y-3">
            {symptom.safe_care.map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando procurar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quando procurar atendimento</h2>
          <div className="space-y-3">
            {symptom.when_to_seek.map((item, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-4 flex items-start gap-3 border border-orange-200">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando é emergência */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quando é emergência</h2>
          <div className="space-y-3">
            {symptom.when_emergency.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-4 flex items-start gap-3 border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* O que NÃO fazer */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">O que NÃO fazer</h2>
          <div className="space-y-3">
            {symptom.dont_do.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="p-5 bg-yellow-50 border-2 border-yellow-200 rounded-2xl">
          <p className="text-sm text-yellow-800 text-center leading-relaxed">
            <strong>⚠️ Importante:</strong> Este conteúdo é informativo e não substitui
            consulta médica. Em caso de dúvidas ou sintomas preocupantes, procure atendimento
            profissional imediatamente.
          </p>
        </div>

        {/* Botões de navegação */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            variant="outline"
            onClick={() => router.push('/sintomas')}
            className="flex-1 py-6 text-base rounded-xl"
          >
            Ver outros sintomas
          </Button>
          <Button
            onClick={() => router.push('/home')}
            className="flex-1 py-6 text-base rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
}

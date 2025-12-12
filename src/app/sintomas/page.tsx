'use client';

import { useRouter } from 'next/navigation';
import { symptomsData } from '@/lib/symptoms-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function SintomasPage() {
  const router = useRouter();

  const handleSymptomClick = (symptomId: string) => {
    router.push(`/sintomas/${symptomId}`);
  };

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
            <h1 className="text-2xl font-bold text-gray-800">Sintomas</h1>
          </div>
        </div>
      </div>

      {/* Lista de Sintomas */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-3">
          {symptomsData.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => handleSymptomClick(symptom.id)}
              className="w-full bg-gray-50 hover:bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  {/* Título */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {symptom.name}
                  </h3>
                  
                  {/* Subtexto */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {symptom.what.substring(0, 100)}...
                  </p>
                </div>

                {/* Ícone de seta */}
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>

        {/* Aviso Legal */}
        <div className="mt-8 p-5 bg-yellow-50 border-2 border-yellow-200 rounded-2xl">
          <p className="text-sm text-yellow-800 text-center leading-relaxed">
            <strong>⚠️ Importante:</strong> Estes conteúdos são informativos e não substituem
            consulta médica. Em caso de sintomas preocupantes, procure atendimento profissional
            imediatamente.
          </p>
        </div>
      </div>
    </div>
  );
}

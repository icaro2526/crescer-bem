'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function QuizIntro() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStart = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    router.push('/quiz/question/0');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="animate-pulse">
          <Sparkles className="w-16 h-16 text-purple-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 rounded-full p-4">
            <Sparkles className="w-12 h-12 text-purple-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Perfil da Criança
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Você responderá 18 perguntas rápidas. Leva menos de 2 minutos.
        </p>

        <Button
          onClick={handleStart}
          disabled={isNavigating}
          size="lg"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl py-6 disabled:opacity-50"
        >
          Começar
        </Button>
      </div>
    </div>
  );
}

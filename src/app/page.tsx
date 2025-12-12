'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Baby, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function OnboardingScreen() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Verificar se já tem perfil salvo
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('crescer-bem-profile');
      if (stored) {
        // Se já tem perfil, redirecionar para home automaticamente
        router.push('/home');
      }
    }
  }, [router, mounted]);

  const handleStart = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    router.push('/quiz');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="animate-pulse">
          <Baby className="w-16 h-16 text-purple-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Ilustração - Mãe + Bebê */}
        <div className="relative mx-auto w-48 h-48 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="relative flex items-center justify-center h-full">
            <div className="relative">
              <Heart className="w-24 h-24 text-pink-400 absolute -top-4 -left-4 opacity-30" />
              <Baby className="w-32 h-32 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Título Grande */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Seja bem-vinda ao<br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Crescer Bem
            </span>
          </h1>

          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Cuidar ficou mais simples
          </h2>

          {/* Texto Auxiliar */}
          <p className="text-base md:text-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
            Informações seguras e acolhedoras para acompanhar o desenvolvimento do seu pequeno.
          </p>
        </div>

        {/* Botão Primário */}
        <Button
          onClick={handleStart}
          disabled={isNavigating}
          size="lg"
          className="w-full max-w-xs mx-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
        >
          Começar
        </Button>
      </div>
    </div>
  );
}

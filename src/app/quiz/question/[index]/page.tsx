'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { quizData } from '@/data/quizQuestions';

export default function QuizQuestion() {
  const router = useRouter();
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const index = parseInt(params.index as string);
  const question = quizData[index];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Carregar respostas anteriores do sessionStorage
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('quiz-answers');
      if (stored) {
        try {
          setAnswers(JSON.parse(stored));
        } catch (e) {
          console.error('Erro ao carregar respostas:', e);
        }
      }
    }
  }, [mounted]);

  function goNext(ans: string) {
    if (isNavigating) return;
    setIsNavigating(true);

    const newAnswers = { ...answers, [index]: ans };
    
    // Salvar no sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quiz-answers', JSON.stringify(newAnswers));
    }

    const next = index + 1;
    if (next < quizData.length) {
      router.push(`/quiz/question/${next}`);
    } else {
      // Finalizar quiz - criar perfil básico
      if (typeof window !== 'undefined') {
        const profile = {
          name: 'Criança',
          birthDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 ano atrás como padrão
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          quizAnswers: newAnswers
        };
        localStorage.setItem('crescer-bem-profile', JSON.stringify(profile));
        sessionStorage.removeItem('quiz-answers');
      }
      router.push('/home');
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="animate-pulse text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Pergunta não encontrada</p>
          <Button onClick={() => router.push('/quiz')}>Voltar</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-4">
          <span className="text-sm text-gray-500">
            Pergunta {index + 1} de {quizData.length}
          </span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          {question.title}
        </h1>
        
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => goNext('yes')}
            disabled={isNavigating}
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl disabled:opacity-50"
          >
            Sim
          </Button>
          <Button
            onClick={() => goNext('sometimes')}
            disabled={isNavigating}
            variant="outline"
            size="lg"
            className="w-full py-4 rounded-xl disabled:opacity-50"
          >
            Às vezes
          </Button>
          <Button
            onClick={() => goNext('no')}
            disabled={isNavigating}
            size="lg"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl disabled:opacity-50"
          >
            Não
          </Button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { autismQuestions, calculateAutismScore, getAutismResult } from '@/lib/autism-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Brain, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

type AnswerValue = 'no' | 'sometimes' | 'yes';

export default function AutismoQuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerValue | null>(null);

  const question = autismQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / autismQuestions.length) * 100;

  useEffect(() => {
    // Load saved answers if any
    const saved = localStorage.getItem('autism_quiz_answers');
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Save answers to localStorage
    localStorage.setItem('autism_quiz_answers', JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    // Set selected answer when question changes
    setSelectedAnswer(answers[question.id] || null);
  }, [currentQuestion, answers, question.id]);

  const handleAnswerSelect = (value: AnswerValue) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = { ...answers, [question.id]: selectedAnswer };
      setAnswers(newAnswers);

      if (currentQuestion < autismQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate result and navigate
        const score = calculateAutismScore(newAnswers);
        const result = getAutismResult(score);

        // Save result
        localStorage.setItem('autism_quiz_result', JSON.stringify({
          score,
          level: result?.level,
          message: result?.message,
          answers: newAnswers,
          completedAt: new Date().toISOString()
        }));

        router.push('/autismo/resultado');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold text-gray-800">Checklist de Autismo</h1>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Pergunta {currentQuestion + 1} de {autismQuestions.length}</span>
              <span>{Math.round(progress)}% completo</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">
              {question.question}
            </CardTitle>
            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                {question.category}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {question.ageGroup}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswer || ''}
              onValueChange={handleAnswerSelect}
              className="space-y-4"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-gray-700 hover:text-gray-900"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            {currentQuestion === autismQuestions.length - 1 ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Finalizar
              </>
            ) : (
              <>
                Próxima
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>Dica:</strong> Responda baseado no comportamento habitual da criança nos últimos meses.
            Não há respostas certas ou erradas - é apenas uma ferramenta de orientação.
          </p>
        </div>

        {/* Exit Button */}
        <div className="text-center mt-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/autismo')}
            className="text-gray-500"
          >
            Sair do questionário
          </Button>
        </div>
      </div>
    </div>
  );
}
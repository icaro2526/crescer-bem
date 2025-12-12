'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import quiz from '@/data/quiz';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function QuestionPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const questionIndex = parseInt(id);
  const question = quiz[questionIndex];
  
  const [answer, setAnswer] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    const saved = localStorage.getItem('quiz-answers');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed);
      
      if (parsed[question.id]) {
        if (question.type === 'multiselect') {
          setSelectedOptions(parsed[question.id]);
        } else {
          setAnswer(parsed[question.id]);
        }
      }
    }
  }, [question.id, question.type]);

  const handleNext = () => {
    const updatedAnswers = {
      ...answers,
      [question.id]: question.type === 'multiselect' ? selectedOptions : answer
    };
    
    localStorage.setItem('quiz-answers', JSON.stringify(updatedAnswers));
    
    if (questionIndex < quiz.length - 1) {
      router.push(`/quiz/question/${questionIndex + 1}`);
    } else {
      router.push('/quiz/result');
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      router.push(`/quiz/question/${questionIndex - 1}`);
    } else {
      router.push('/quiz');
    }
  };

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const progress = ((questionIndex + 1) / quiz.length) * 100;

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Digite sua resposta"
            className="text-lg p-6 rounded-xl"
          />
        );
      
      case 'date':
        return (
          <Input
            type="date"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="text-lg p-6 rounded-xl"
          />
        );
      
      case 'number':
        return (
          <Input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="0"
            className="text-lg p-6 rounded-xl"
          />
        );
      
      case 'textarea':
        return (
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Digite suas observações (opcional)"
            className="text-lg p-6 rounded-xl min-h-[120px]"
          />
        );
      
      case 'yesno':
        return (
          <div className="flex gap-4">
            <Button
              onClick={() => setAnswer('Sim')}
              variant={answer === 'Sim' ? 'default' : 'outline'}
              className={`flex-1 py-6 text-lg rounded-xl ${
                answer === 'Sim' 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'hover:bg-green-50'
              }`}
            >
              Sim
            </Button>
            <Button
              onClick={() => setAnswer('Não')}
              variant={answer === 'Não' ? 'default' : 'outline'}
              className={`flex-1 py-6 text-lg rounded-xl ${
                answer === 'Não' 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'hover:bg-red-50'
              }`}
            >
              Não
            </Button>
          </div>
        );
      
      case 'select':
        return (
          <div className="flex flex-col gap-3">
            {question.options?.map((option) => (
              <Button
                key={option}
                onClick={() => setAnswer(option)}
                variant={answer === option ? 'default' : 'outline'}
                className={`py-6 text-lg rounded-xl ${
                  answer === option 
                    ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                    : 'hover:bg-purple-50'
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        );
      
      case 'multiselect':
        return (
          <div className="flex flex-col gap-3">
            {question.options?.map((option) => (
              <Button
                key={option}
                onClick={() => toggleOption(option)}
                variant={selectedOptions.includes(option) ? 'default' : 'outline'}
                className={`py-6 text-lg rounded-xl ${
                  selectedOptions.includes(option)
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'hover:bg-blue-50'
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Pergunta não encontrada</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Pergunta {questionIndex + 1} de {quiz.length}
            </span>
            <span className="text-sm font-semibold text-purple-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-6">
          <Label className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 block">
            {question.title}
          </Label>
          
          {renderInput()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleBack}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              question.type === 'multiselect' 
                ? selectedOptions.length === 0 
                : !answer && question.id !== 18
            }
            className="flex-1 py-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            {questionIndex < quiz.length - 1 ? 'Próxima' : 'Finalizar'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

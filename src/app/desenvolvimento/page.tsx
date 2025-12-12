'use client';

import { useRouter } from 'next/navigation';
import { 
  Baby, 
  Smile, 
  Heart, 
  Sparkles, 
  Star, 
  Puzzle,
  Home
} from 'lucide-react';

export default function DesenvolvimentoPage() {
  const router = useRouter();

  const ageGroups = [
    {
      id: '0-3m',
      age: '0–3 meses',
      icon: Baby,
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      subtitle: 'Primeiros sorrisos e sons'
    },
    {
      id: '3-6m',
      age: '3–6 meses',
      icon: Smile,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      subtitle: 'Rolar e pegar objetos'
    },
    {
      id: '6-9m',
      age: '6–9 meses',
      icon: Heart,
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      subtitle: 'Sentar e balbuciar'
    },
    {
      id: '9-12m',
      age: '9–12 meses',
      icon: Sparkles,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      subtitle: 'Primeiros passos'
    },
    {
      id: '1-2a',
      age: '1–2 anos',
      icon: Star,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      subtitle: 'Andar e primeiras palavras'
    },
    {
      id: '2-3a',
      age: '2–3 anos',
      icon: Puzzle,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      subtitle: 'Frases e brincadeiras'
    },
    {
      id: '3-5a',
      age: '3–5 anos',
      icon: Sparkles,
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
      subtitle: 'Autonomia e socialização'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Desenvolvimento
            </h1>
            <button
              onClick={() => router.push('/home')}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-2 hover:scale-110 transition-transform"
            >
              <Home className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid de 7 Cards */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ageGroups.map((group) => {
            const Icon = group.icon;
            return (
              <button
                key={group.id}
                onClick={() => router.push(`/desenvolvimento/${group.id}`)}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-left"
              >
                {/* Ícone Lúdico */}
                <div className={`${group.bgColor} rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-gray-700" />
                </div>

                {/* Idade */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {group.age}
                </h2>

                {/* Subtexto */}
                <p className="text-sm text-gray-600">
                  {group.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Card Extra - Suspeita de Autismo */}
        <div className="mt-8">
          <button
            onClick={() => router.push('/autismo')}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-2xl p-4">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Checklist de Observação
                </h3>
                <p className="text-white/90">
                  Ferramenta para acompanhar comportamentos do seu pequeno
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

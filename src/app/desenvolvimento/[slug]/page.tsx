'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Baby, Smile, Heart, Sparkles, Star, Puzzle } from 'lucide-react';

const developmentData: Record<string, any> = {
  '0-3m': {
    age: '0–3 meses',
    icon: Baby,
    color: 'from-pink-400 to-pink-600',
    marcos: [
      'Levanta a cabeça quando está de bruços',
      'Acompanha objetos com os olhos',
      'Sorri em resposta a estímulos',
      'Emite sons (arrulhos)',
      'Reconhece rostos familiares'
    ],
    brincadeiras: [
      'Conversar olhando nos olhos',
      'Mostrar objetos coloridos e contrastantes',
      'Cantar canções de ninar',
      'Fazer massagens suaves',
      'Colocar de bruços por curtos períodos'
    ],
    observar: [
      'Reação a sons altos',
      'Contato visual',
      'Movimentos dos braços e pernas',
      'Capacidade de sugar',
      'Resposta ao toque'
    ],
    ajuda: [
      'Não reage a sons altos',
      'Não acompanha objetos com os olhos',
      'Não sorri ou interage',
      'Corpo muito rígido ou muito mole',
      'Não consegue levantar a cabeça aos 3 meses'
    ]
  },
  '3-6m': {
    age: '3–6 meses',
    icon: Smile,
    color: 'from-purple-400 to-purple-600',
    marcos: [
      'Rola de bruços para costas',
      'Pega objetos com as mãos',
      'Leva objetos à boca',
      'Ri alto',
      'Balbucia sons variados'
    ],
    brincadeiras: [
      'Oferecer chocalhos e mordedores',
      'Brincar de esconde-achou',
      'Ler livros de pano',
      'Cantar músicas com gestos',
      'Deixar explorar texturas diferentes'
    ],
    observar: [
      'Coordenação mão-olho',
      'Interesse por objetos',
      'Variedade de sons',
      'Expressões faciais',
      'Força do pescoço e tronco'
    ],
    ajuda: [
      'Não tenta pegar objetos',
      'Não rola em nenhuma direção',
      'Não emite sons',
      'Não demonstra afeto pelos cuidadores',
      'Parece muito rígido ou muito mole'
    ]
  },
  '6-9m': {
    age: '6–9 meses',
    icon: Heart,
    color: 'from-red-400 to-red-600',
    marcos: [
      'Senta sem apoio',
      'Transfere objetos de uma mão para outra',
      'Balbucia sílabas (ma-ma, da-da)',
      'Reconhece o próprio nome',
      'Demonstra ansiedade com estranhos'
    ],
    brincadeiras: [
      'Empilhar blocos macios',
      'Brincar de bater palmas',
      'Oferecer brinquedos que fazem barulho',
      'Esconder objetos sob panos',
      'Ler livros com figuras grandes'
    ],
    observar: [
      'Equilíbrio ao sentar',
      'Uso das duas mãos',
      'Resposta ao nome',
      'Interesse em explorar',
      'Vínculo com cuidadores'
    ],
    ajuda: [
      'Não senta mesmo com apoio',
      'Não balbucia',
      'Não demonstra interesse por brinquedos',
      'Não responde ao nome',
      'Perdeu habilidades que tinha'
    ]
  },
  '9-12m': {
    age: '9–12 meses',
    icon: Sparkles,
    color: 'from-yellow-400 to-yellow-600',
    marcos: [
      'Fica em pé com apoio',
      'Dá os primeiros passos',
      'Usa pinça (polegar e indicador)',
      'Diz primeiras palavras',
      'Aponta para o que quer'
    ],
    brincadeiras: [
      'Empurrar carrinhos de brinquedo',
      'Brincar de encaixar formas',
      'Oferecer livros para virar páginas',
      'Cantar músicas com gestos',
      'Brincar de esconder e procurar'
    ],
    observar: [
      'Tentativas de andar',
      'Coordenação fina',
      'Comunicação (gestos e sons)',
      'Imitação de ações',
      'Curiosidade pelo ambiente'
    ],
    ajuda: [
      'Não engatinha ou se movimenta',
      'Não aponta ou gesticula',
      'Não diz nenhuma palavra',
      'Não reconhece objetos familiares',
      'Perdeu habilidades anteriores'
    ]
  },
  '1-2a': {
    age: '1–2 anos',
    icon: Star,
    color: 'from-blue-400 to-blue-600',
    marcos: [
      'Anda sozinho',
      'Sobe escadas com ajuda',
      'Diz 10-20 palavras',
      'Começa a combinar palavras',
      'Imita ações dos adultos'
    ],
    brincadeiras: [
      'Brincar de faz de conta (casinha, cozinha)',
      'Empilhar blocos',
      'Desenhar com giz de cera',
      'Brincar com massinha',
      'Cantar e dançar'
    ],
    observar: [
      'Marcha e equilíbrio',
      'Vocabulário crescente',
      'Interesse social',
      'Independência crescente',
      'Compreensão de comandos simples'
    ],
    ajuda: [
      'Não anda aos 18 meses',
      'Não diz palavras aos 18 meses',
      'Não aponta para mostrar coisas',
      'Não imita ações',
      'Perdeu linguagem ou habilidades sociais'
    ]
  },
  '2-3a': {
    age: '2–3 anos',
    icon: Puzzle,
    color: 'from-green-400 to-green-600',
    marcos: [
      'Corre e pula',
      'Faz frases de 2-3 palavras',
      'Segue instruções de 2 passos',
      'Brinca ao lado de outras crianças',
      'Começa a usar "eu" e "meu"'
    ],
    brincadeiras: [
      'Quebra-cabeças simples',
      'Brincar de imitar profissões',
      'Pintar com tintas',
      'Brincar com bola',
      'Contar histórias com fantoches'
    ],
    observar: [
      'Coordenação motora grossa',
      'Clareza da fala',
      'Interação com outras crianças',
      'Autonomia (comer, vestir)',
      'Controle de esfíncteres'
    ],
    ajuda: [
      'Não faz frases de 2 palavras aos 2 anos',
      'Não consegue correr ou subir escadas',
      'Não demonstra interesse em brincar',
      'Não faz contato visual',
      'Comportamentos repetitivos excessivos'
    ]
  },
  '3-5a': {
    age: '3–5 anos',
    icon: Sparkles,
    color: 'from-indigo-400 to-indigo-600',
    marcos: [
      'Pedala triciclo',
      'Fala frases completas',
      'Conta histórias',
      'Brinca em grupo',
      'Reconhece cores e formas'
    ],
    brincadeiras: [
      'Jogos de tabuleiro simples',
      'Brincar de teatro',
      'Construir com blocos',
      'Desenhar e colorir',
      'Brincar ao ar livre'
    ],
    observar: [
      'Habilidades sociais',
      'Linguagem complexa',
      'Coordenação motora fina',
      'Imaginação e criatividade',
      'Preparação para escola'
    ],
    ajuda: [
      'Não fala frases aos 3 anos',
      'Não consegue pular ou correr',
      'Não brinca com outras crianças',
      'Não consegue seguir instruções simples',
      'Dificuldade extrema em separar-se dos pais'
    ]
  }
};

export default function DesenvolvimentoDetalhePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = use(params);
  const router = useRouter();
  const data = developmentData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Faixa etária não encontrada</p>
          <button
            onClick={() => router.push('/desenvolvimento')}
            className="text-purple-600 hover:underline"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/desenvolvimento')}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Voltar
              </button>
            </div>
            <button
              onClick={() => router.push('/home')}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-2 hover:scale-110 transition-transform"
            >
              <Home className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Título com Ícone */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className={`bg-gradient-to-br ${data.color} rounded-2xl p-4`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              {data.age}
            </h1>
          </div>
        </div>

        {/* Marcos Esperados */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📍 Marcos Esperados
          </h2>
          <div className="space-y-3">
            {data.marcos.map((marco: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                <div className="bg-green-500 rounded-full p-1 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">{marco}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brincadeiras Recomendadas */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎨 Brincadeiras Recomendadas
          </h2>
          <div className="space-y-3">
            {data.brincadeiras.map((brincadeira: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl">
                <div className="bg-purple-500 rounded-full p-1 mt-0.5">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 flex-1">{brincadeira}</p>
              </div>
            ))}
          </div>
        </div>

        {/* O que Observar */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            👀 O que Observar
          </h2>
          <div className="space-y-3">
            {data.observar.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                <div className="bg-blue-500 rounded-full p-1 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quando Buscar Ajuda */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-orange-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ⚠️ Quando Buscar Ajuda
          </h2>
          <div className="space-y-3">
            {data.ajuda.map((sinal: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl">
                <div className="bg-orange-500 rounded-full p-1 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">{sinal}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-orange-100 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Importante:</strong> Cada criança se desenvolve no seu próprio ritmo. Se você notar algum desses sinais, converse com o pediatra para uma avaliação adequada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

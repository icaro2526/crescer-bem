export interface ScreenRecommendation {
  ageRange: string;
  maxTime: string;
  guidelines: string[];
  risks: string[];
  strategies: string[];
}

export const screenRecommendations: ScreenRecommendation[] = [
  {
    ageRange: '0-18 meses',
    maxTime: '0 minutos',
    guidelines: [
      'Não recomendado nenhum tipo de tela',
      'Exceção: videochamadas com familiares (máximo 5-10 minutos/dia)',
      'Foco no contato visual e interação real',
      'Priorize brincadeiras sensoriais e exploração'
    ],
    risks: [
      'Atraso no desenvolvimento da linguagem',
      'Problemas na interação social',
      'Dificuldades de atenção e concentração',
      'Impacto no desenvolvimento motor',
      'Alterações no sono'
    ],
    strategies: [
      'Crie rotina sem telas',
      'Ofereça alternativas: livros, música, brincadeiras',
      'Incentive exploração do ambiente',
      'Promova interações presenciais'
    ]
  },
  {
    ageRange: '18-24 meses',
    maxTime: '30-60 minutos/dia',
    guidelines: [
      'Máximo 1 hora por dia',
      'Conteúdo supervisionado e de qualidade',
      'Sempre acompanhado pelos pais',
      'Equilibre com atividades offline'
    ],
    risks: [
      'Redução do vocabulário',
      'Dificuldades na comunicação',
      'Problemas de comportamento',
      'Sedentarismo',
      'Exposição a conteúdo inadequado'
    ],
    strategies: [
      'Escolha programas educativos',
      'Assista junto e comente',
      'Limite tempo com timer',
      'Compense com brincadeiras ativas'
    ]
  },
  {
    ageRange: '2-5 anos',
    maxTime: '1 hora/dia',
    guidelines: [
      'Máximo 60 minutos por dia',
      'Conteúdo apropriado para idade',
      'Supervisionado pelos responsáveis',
      'Equilibre com outras atividades'
    ],
    risks: [
      'Problemas de sono',
      'Irritabilidade e agitação',
      'Dificuldades de concentração',
      'Isolamento social',
      'Excesso de estímulos'
    ],
    strategies: [
      'Use aplicativos educativos',
      'Defina horários específicos',
      'Incentive brincadeiras ao ar livre',
      'Crie regras familiares claras'
    ]
  }
];

export const screenRisks = [
  'Interferência no desenvolvimento cerebral',
  'Problemas de sono e irritabilidade',
  'Dificuldades de aprendizagem',
  'Redução da criatividade e imaginação',
  'Isolamento social',
  'Problemas posturais',
  'Exposição a conteúdo inadequado',
  'Vício e dependência'
];

export const screenStrategies = [
  'Defina regras claras e consistentes',
  'Crie rotina familiar sem telas',
  'Ofereça alternativas atraentes',
  'Use telas como recompensa, não como babá',
  'Supervisione sempre o conteúdo',
  'Limite tempo com aplicativos de controle parental',
  'Incentive brincadeiras criativas',
  'Promova atividades ao ar livre'
];

export const timerTips = [
  'Configure limite diário no dispositivo',
  'Use aplicativos de controle parental',
  'Defina horário específico para telas',
  'Crie rotina de "hora da tela" e "hora sem tela"',
  'Use timer visual para crianças maiores',
  'Desligue dispositivos 1 hora antes de dormir',
  'Mantenha telas fora do quarto'
];
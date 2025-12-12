export interface AutismQuestion {
  id: string;
  question: string;
  options: {
    value: 'no' | 'sometimes' | 'yes';
    label: string;
  }[];
  category: string;
  ageGroup: string;
}

export const autismQuestions: AutismQuestion[] = [
  {
    id: 'q1',
    question: 'A criança responde quando você chama seu nome?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'comunicação',
    ageGroup: '0-2 anos'
  },
  {
    id: 'q2',
    question: 'A criança aponta com o dedo para mostrar interesse em algo?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'comunicação',
    ageGroup: '0-2 anos'
  },
  {
    id: 'q3',
    question: 'A criança brinca de faz-de-conta (como fingir tomar chá ou cozinhar)?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'brincadeiras',
    ageGroup: '1-3 anos'
  },
  {
    id: 'q4',
    question: 'A criança segue o olhar de outra pessoa quando ela aponta para algo?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'interação social',
    ageGroup: '0-2 anos'
  },
  {
    id: 'q5',
    question: 'A criança tenta chamar a atenção de outras pessoas para mostrar algo interessante?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'comunicação',
    ageGroup: '0-3 anos'
  },
  {
    id: 'q6',
    question: 'A criança entende quando você diz "não" ou "pare"?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'compreensão',
    ageGroup: '1-2 anos'
  },
  {
    id: 'q7',
    question: 'A criança responde a expressões faciais, como sorrisos ou caretas?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'interação social',
    ageGroup: '0-2 anos'
  },
  {
    id: 'q8',
    question: 'A criança balança o corpo para frente e para trás ou gira em círculos repetidamente?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'comportamentos repetitivos',
    ageGroup: '1-3 anos'
  },
  {
    id: 'q9',
    question: 'A criança demonstra interesse em outras crianças da mesma idade?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'interação social',
    ageGroup: '1-3 anos'
  },
  {
    id: 'q10',
    question: 'A criança traz objetos para mostrar para você sem tentar chamar sua atenção?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'comunicação',
    ageGroup: '1-2 anos'
  },
  {
    id: 'q11',
    question: 'A criança evita contato visual?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'interação social',
    ageGroup: '0-5 anos'
  },
  {
    id: 'q12',
    question: 'A criança tem rotinas muito rígidas e fica muito chateada com mudanças?',
    options: [
      { value: 'no', label: 'Não' },
      { value: 'sometimes', label: 'Às vezes' },
      { value: 'yes', label: 'Sim' }
    ],
    category: 'rotinas',
    ageGroup: '2-5 anos'
  }
];

export const scoringRules = {
  autism_score_rules: { no: 1, sometimes: 0.5, yes: 0 },
  ranges: [
    { min: 0, max: 3, level: 'low', message: 'Perfil dentro do esperado para a idade' },
    { min: 3.5, max: 6, level: 'moderate', message: 'Alguns sinais que merecem atenção' },
    { min: 6.5, max: 12, level: 'high', message: 'Vários sinais identificados - recomenda-se avaliação profissional' }
  ]
};

export const calculateAutismScore = (answers: Record<string, 'no' | 'sometimes' | 'yes'>): number => {
  let totalScore = 0;
  Object.values(answers).forEach(answer => {
    totalScore += scoringRules.autism_score_rules[answer];
  });
  return totalScore;
};

export const getAutismResult = (score: number) => {
  return scoringRules.ranges.find(range => score >= range.min && score <= range.max);
};
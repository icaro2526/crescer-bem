import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  // PERFIL
  {
    id: 'q1',
    category: 'perfil',
    question: 'Qual é o nome da criança?',
    type: 'text',
    placeholder: 'Digite o nome',
    required: true,
    fieldName: 'name'
  },
  {
    id: 'q2',
    category: 'perfil',
    question: 'Qual é a data de nascimento?',
    type: 'date',
    required: true,
    fieldName: 'birthDate'
  },
  {
    id: 'q3',
    category: 'perfil',
    question: 'Gênero (opcional)',
    type: 'select',
    options: [
      { value: 'masculino', label: 'Masculino' },
      { value: 'feminino', label: 'Feminino' },
      { value: 'outro', label: 'Outro' },
      { value: 'prefiro-nao-dizer', label: 'Prefiro não dizer' }
    ],
    required: false,
    fieldName: 'gender'
  },
  
  // DESENVOLVIMENTO
  {
    id: 'q4',
    category: 'desenvolvimento',
    question: 'Como está a fala da criança?',
    type: 'select',
    options: [
      { value: 'nao-fala', label: 'Ainda não fala' },
      { value: 'balbucia', label: 'Balbucia (sons)' },
      { value: 'palavras-soltas', label: 'Fala palavras soltas' },
      { value: 'frases-simples', label: 'Faz frases simples' },
      { value: 'frases-completas', label: 'Fala frases completas' }
    ],
    required: true,
    fieldName: 'development.speech'
  },
  {
    id: 'q5',
    category: 'desenvolvimento',
    question: 'Como é a interação social?',
    type: 'select',
    options: [
      { value: 'pouca', label: 'Pouca interação' },
      { value: 'moderada', label: 'Interação moderada' },
      { value: 'boa', label: 'Boa interação' },
      { value: 'excelente', label: 'Excelente interação' }
    ],
    required: true,
    fieldName: 'development.socialInteraction'
  },
  {
    id: 'q6',
    category: 'desenvolvimento',
    question: 'A criança tem uma rotina estabelecida?',
    type: 'select',
    options: [
      { value: 'nenhuma', label: 'Sem rotina definida' },
      { value: 'flexivel', label: 'Rotina flexível' },
      { value: 'estruturada', label: 'Rotina estruturada' }
    ],
    required: true,
    fieldName: 'development.routine'
  },
  {
    id: 'q7',
    category: 'desenvolvimento',
    question: 'Uso de fraldas',
    type: 'select',
    options: [
      { value: 'usa-sempre', label: 'Usa fraldas' },
      { value: 'treinamento', label: 'Em treinamento' },
      { value: 'nao-usa', label: 'Não usa mais' }
    ],
    required: true,
    fieldName: 'development.diapers'
  },
  {
    id: 'q8',
    category: 'desenvolvimento',
    question: 'Como é a alimentação?',
    type: 'select',
    options: [
      { value: 'amamentacao', label: 'Amamentação' },
      { value: 'mamadeira', label: 'Mamadeira' },
      { value: 'solidos', label: 'Alimentos sólidos com ajuda' },
      { value: 'autonomo', label: 'Come sozinho' }
    ],
    required: true,
    fieldName: 'development.feeding'
  },
  
  // COMPORTAMENTO
  {
    id: 'q9',
    category: 'comportamento',
    question: 'Com que frequência acontecem birras?',
    type: 'select',
    options: [
      { value: 'raras', label: 'Raramente' },
      { value: 'ocasionais', label: 'Ocasionalmente' },
      { value: 'frequentes', label: 'Frequentemente' },
      { value: 'muito-frequentes', label: 'Muito frequentemente' }
    ],
    required: true,
    fieldName: 'behavior.tantrums'
  },
  {
    id: 'q10',
    category: 'comportamento',
    question: 'Demonstra interesse em outras crianças?',
    type: 'select',
    options: [
      { value: 'pouco', label: 'Pouco interesse' },
      { value: 'moderado', label: 'Interesse moderado' },
      { value: 'muito', label: 'Muito interesse' }
    ],
    required: true,
    fieldName: 'behavior.interestInOthers'
  },
  
  // SONO
  {
    id: 'q11',
    category: 'sono',
    question: 'Qual o horário habitual de dormir?',
    type: 'time',
    placeholder: '20:00',
    required: true,
    fieldName: 'sleep.bedtime'
  },
  {
    id: 'q12',
    category: 'sono',
    question: 'Quantas horas dorme por noite?',
    type: 'number',
    placeholder: '10',
    required: true,
    fieldName: 'sleep.hoursPerNight'
  },
  {
    id: 'q13',
    category: 'sono',
    question: 'Quantas sonecas durante o dia?',
    type: 'number',
    placeholder: '2',
    required: true,
    fieldName: 'sleep.naps'
  },
  
  // TELAS
  {
    id: 'q14',
    category: 'telas',
    question: 'Quanto tempo de tela por dia? (em minutos)',
    type: 'number',
    placeholder: '60',
    required: true,
    fieldName: 'screenTime.dailyMinutes'
  },
  {
    id: 'q15',
    category: 'telas',
    question: 'Quais dispositivos a criança usa?',
    type: 'multiselect',
    options: [
      { value: 'tv', label: 'TV' },
      { value: 'tablet', label: 'Tablet' },
      { value: 'smartphone', label: 'Smartphone' },
      { value: 'computador', label: 'Computador' },
      { value: 'videogame', label: 'Videogame' },
      { value: 'nenhum', label: 'Nenhum' }
    ],
    required: true,
    fieldName: 'screenTime.devices'
  }
];

export const getCategoryProgress = (currentIndex: number): { current: number; total: number; percentage: number } => {
  const total = quizQuestions.length;
  const percentage = Math.round(((currentIndex + 1) / total) * 100);
  return { current: currentIndex + 1, total, percentage };
};

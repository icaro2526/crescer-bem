// Tipos de dados do aplicativo Crescer Bem

export interface ChildProfile {
  id: string;
  name: string;
  birthDate: string;
  gender?: 'masculino' | 'feminino' | 'outro' | 'prefiro-nao-dizer';
  ageInMonths: number;
  
  // Dados do quiz
  development: {
    speech: 'nao-fala' | 'balbucia' | 'palavras-soltas' | 'frases-simples' | 'frases-completas';
    socialInteraction: 'pouca' | 'moderada' | 'boa' | 'excelente';
    routine: 'nenhuma' | 'flexivel' | 'estruturada';
    diapers: 'usa-sempre' | 'treinamento' | 'nao-usa';
    feeding: 'amamentacao' | 'mamadeira' | 'solidos' | 'autonomo';
  };
  
  behavior: {
    tantrums: 'raras' | 'ocasionais' | 'frequentes' | 'muito-frequentes';
    interestInOthers: 'pouco' | 'moderado' | 'muito';
  };
  
  sleep: {
    bedtime: string; // HH:MM
    hoursPerNight: number;
    naps: number;
  };
  
  screenTime: {
    dailyMinutes: number;
    devices: string[];
  };
  
  createdAt: string;
  updatedAt: string;
}

export interface QuizQuestion {
  id: string;
  category: 'perfil' | 'desenvolvimento' | 'comportamento' | 'sono' | 'telas';
  question: string;
  type: 'text' | 'date' | 'select' | 'number' | 'multiselect' | 'time';
  options?: { value: string; label: string }[];
  placeholder?: string;
  required: boolean;
  fieldName: string;
}

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  description: string;
  whatToObserve: string[];
  commonCauses: string[];
  homeMonitoring: string[];
  whenToSeekCare: string[];
  whenEmergency: string[];
  safeCare: string[];
  whatNotToDo: string[];
}

export interface DevelopmentMilestone {
  ageRange: string;
  ageInMonths: [number, number];
  motor: string[];
  language: string[];
  cognitive: string[];
  socialEmotional: string[];
  recommendedActivities: string[];
  redFlags: string[];
}

export interface AutismChecklist {
  ageRange: string;
  ageInMonths: [number, number];
  items: {
    id: string;
    text: string;
    concern: boolean; // true se a ausência é preocupante
  }[];
}

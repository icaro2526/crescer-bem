export interface Symptom {
  id: string;
  name: string;
  what: string;
  common_causes: string[];
  home_monitor: string[];
  when_to_seek: string[];
  when_emergency: string[];
  safe_care: string[];
  dont_do: string[];
}

export const symptomsData: Symptom[] = [
  {
    id: 'febre',
    name: 'Febre',
    what: 'Elevação da temperatura corporal acima do normal, geralmente acima de 37,5°C.',
    common_causes: [
      'Infecções virais (como resfriado ou gripe)',
      'Infecções bacterianas',
      'Reações a vacinas',
      'Desidratação',
      'Excesso de roupa ou ambiente quente'
    ],
    home_monitor: [
      'Meça a temperatura regularmente (axila, ouvido ou temporal)',
      'Observe se há outros sintomas associados',
      'Monitore o comportamento da criança',
      'Anote a duração e intensidade da febre'
    ],
    when_to_seek: [
      'Febre persistente por mais de 3 dias',
      'Temperatura acima de 38,5°C em bebês menores de 3 meses',
      'Criança com menos de 2 anos com febre alta',
      'Sinais de desidratação ou dificuldade para respirar'
    ],
    when_emergency: [
      'Temperatura acima de 40°C',
      'Convulsões febris',
      'Dificuldade para respirar',
      'Letargia extrema ou inconsciência',
      'Bebês com menos de 3 meses com qualquer febre'
    ],
    safe_care: [
      'Mantenha a criança hidratada com água ou leite',
      'Vista roupas leves',
      'Mantenha ambiente fresco',
      'Use medicamentos apenas se indicados por profissional',
      'Descanse e evite atividades físicas intensas'
    ],
    dont_do: [
      'Não use antitérmicos sem orientação médica',
      'Não use métodos caseiros como álcool ou água gelada',
      'Não ignore febre em bebês pequenos',
      'Não force alimentação se não houver apetite'
    ]
  },
  {
    id: 'tosse',
    name: 'Tosse',
    what: 'Reflexo natural do organismo para limpar as vias aéreas.',
    common_causes: [
      'Infecções respiratórias (resfriado, gripe)',
      'Alergias',
      'Irritação por fumaça ou ar seco',
      'Corpo estranho nas vias aéreas',
      'Bronquite ou pneumonia'
    ],
    home_monitor: [
      'Observe a frequência e intensidade da tosse',
      'Note se é seca ou produtiva (com catarro)',
      'Verifique se há febre associada',
      'Monitore respiração e cor da pele'
    ],
    when_to_seek: [
      'Tosse persistente por mais de 1 semana',
      'Tosse com sangue',
      'Dificuldade para respirar',
      'Febre alta associada'
    ],
    when_emergency: [
      'Tosse com chiado forte no peito',
      'Dificuldade extrema para respirar',
      'Lábios ou unhas azuladas',
      'Criança muito pequena ou com doença crônica'
    ],
    safe_care: [
      'Mantenha ar úmido no ambiente',
      'Ofereça líquidos para hidratação',
      'Eleve a cabeceira da cama',
      'Evite irritantes como fumaça'
    ],
    dont_do: [
      'Não use xaropes sem prescrição',
      'Não suprima tosse produtiva',
      'Não ignore tosse em bebês',
      'Não use vaporizadores quentes sem supervisão'
    ]
  },
  {
    id: 'diarreia',
    name: 'Diarreia',
    what: 'Eliminação de fezes líquidas ou pastosas com frequência aumentada.',
    common_causes: [
      'Infecções virais ou bacterianas',
      'Intolerância alimentar',
      'Alimentação inadequada',
      'Medicações',
      'Estresse ou mudança de rotina'
    ],
    home_monitor: [
      'Conte o número de evacuações',
      'Observe consistência e cor das fezes',
      'Verifique sinais de desidratação',
      'Monitore apetite e comportamento'
    ],
    when_to_seek: [
      'Diarreia por mais de 2-3 dias',
      'Sinais de desidratação',
      'Febre alta',
      'Sangue nas fezes'
    ],
    when_emergency: [
      'Desidratação grave (olhos fundos, boca seca)',
      'Febre muito alta',
      'Criança muito pequena ou debilitada',
      'Diarreia com vômitos frequentes'
    ],
    safe_care: [
      'Ofereça líquidos frequentemente',
      'Continue amamentação se possível',
      'Alimentação leve (banana, arroz, maçã)',
      'Higiene adequada das mãos'
    ],
    dont_do: [
      'Não use medicamentos antidiarreicos sem orientação',
      'Não suspenda líquidos por medo de diarreia',
      'Não force alimentação pesada',
      'Não ignore sinais de desidratação'
    ]
  },
  {
    id: 'vomito',
    name: 'Vômito',
    what: 'Expulsão forçada do conteúdo do estômago pela boca.',
    common_causes: [
      'Infecções gastrointestinais',
      'Intoxicação alimentar',
      'Refluxo',
      'Infecções respiratórias',
      'Estresse ou ansiedade'
    ],
    home_monitor: [
      'Observe frequência e quantidade',
      'Note se há sangue ou bile',
      'Verifique sinais de desidratação',
      'Monitore temperatura e comportamento'
    ],
    when_to_seek: [
      'Vômitos frequentes ou persistentes',
      'Incapacidade de reter líquidos',
      'Sinais de desidratação',
      'Dor abdominal intensa'
    ],
    when_emergency: [
      'Vômitos com sangue',
      'Desidratação grave',
      'Criança muito pequena',
      'Vômitos após trauma na cabeça'
    ],
    safe_care: [
      'Ofereça pequenos goles de líquido frequentemente',
      'Descanse em posição elevada',
      'Alimentação leve após parar vômitos',
      'Ambiente calmo e fresco'
    ],
    dont_do: [
      'Não force alimentação imediata',
      'Não use antieméticos sem prescrição',
      'Não ignore vômitos em bebês',
      'Não misture medicamentos caseiros'
    ]
  },
  {
    id: 'coriza',
    name: 'Coriza',
    what: 'Secreção nasal excessiva, geralmente transparente ou esbranquiçada.',
    common_causes: [
      'Infecções virais (resfriado comum)',
      'Alergias',
      'Irritação ambiental',
      'Mudanças de temperatura',
      'Corpo estranho no nariz'
    ],
    home_monitor: [
      'Observe cor e quantidade da secreção',
      'Verifique se há febre',
      'Monitore respiração nasal',
      'Note duração dos sintomas'
    ],
    when_to_seek: [
      'Coriza persistente por mais de 10 dias',
      'Secreção verde ou amarela intensa',
      'Febre alta associada',
      'Dificuldade para respirar'
    ],
    when_emergency: [
      'Dificuldade extrema para respirar',
      'Febre muito alta',
      'Criança com menos de 3 meses',
      'Sinais de infecção grave'
    ],
    safe_care: [
      'Limpe o nariz gentilmente com soro fisiológico',
      'Mantenha ar úmido',
      'Eleve a cabeceira da cama',
      'Ofereça líquidos'
    ],
    dont_do: [
      'Não use descongestionantes sem orientação',
      'Não aspire o nariz com força',
      'Não use remédios caseiros no nariz',
      'Não ignore coriza em bebês'
    ]
  },
  {
    id: 'desidratacao',
    name: 'Desidratação',
    what: 'Perda excessiva de água e sais minerais do organismo.',
    common_causes: [
      'Diarreia ou vômitos',
      'Febre alta',
      'Excesso de calor',
      'Falta de ingestão de líquidos',
      'Infecções'
    ],
    home_monitor: [
      'Observe boca seca e olhos fundos',
      'Conte fraldas molhadas',
      'Verifique elasticidade da pele',
      'Monitore choro e atividade'
    ],
    when_to_seek: [
      'Sinais leves de desidratação',
      'Criança com diarreia ou vômitos',
      'Febre persistente',
      'Recusa de líquidos'
    ],
    when_emergency: [
      'Desidratação grave (pele enrugada)',
      'Criança letárgica ou inconsciente',
      'Falta de urina por mais de 8 horas',
      'Bebês com menos de 6 meses'
    ],
    safe_care: [
      'Ofereça líquidos frequentemente',
      'Use soluções de reidratação oral',
      'Continue amamentação',
      'Ambiente fresco'
    ],
    dont_do: [
      'Não espere sinais graves aparecerem',
      'Não use refrigerantes ou sucos concentrados',
      'Não force grandes quantidades de uma vez',
      'Não ignore em bebês e crianças pequenas'
    ]
  },
  {
    id: 'alergia',
    name: 'Alergia',
    what: 'Reação exagerada do sistema imune a substâncias geralmente inofensivas.',
    common_causes: [
      'Alimentos (leite, ovos, nozes)',
      'Poeira, ácaros',
      'Pelos de animais',
      'Pólen',
      'Produtos químicos'
    ],
    home_monitor: [
      'Observe sintomas após exposição',
      'Identifique possíveis gatilhos',
      'Monitore gravidade dos sintomas',
      'Anote frequência dos episódios'
    ],
    when_to_seek: [
      'Primeira reação alérgica grave',
      'Dificuldade para respirar',
      'Inchaço na boca ou garganta',
      'Sintomas persistentes'
    ],
    when_emergency: [
      'Reação anafilática (dificuldade para respirar, inchaço)',
      'Choque alérgico',
      'Perda de consciência',
      'Sintomas após picada de inseto'
    ],
    safe_care: [
      'Evite substâncias identificadas',
      'Tenha plano de ação para emergências',
      'Use medicações preventivas se indicadas',
      'Educação sobre alergias'
    ],
    dont_do: [
      'Não ignore primeiros sinais',
      'Não use medicações sem prescrição',
      'Não teste alimentos suspeitos em casa',
      'Não hesite em procurar ajuda'
    ]
  },
  {
    id: 'constipacao',
    name: 'Constipação',
    what: 'Dificuldade para evacuar ou fezes endurecidas e infrequentes.',
    common_causes: [
      'Alimentação pobre em fibras',
      'Falta de líquidos',
      'Mudanças na rotina',
      'Medicações',
      'Estresse'
    ],
    home_monitor: [
      'Observe frequência das evacuações',
      'Note consistência das fezes',
      'Verifique sinais de desconforto',
      'Monitore hidratação'
    ],
    when_to_seek: [
      'Constipação por mais de 3 dias',
      'Dor abdominal intensa',
      'Sangue nas fezes',
      'Criança com menos de 1 ano'
    ],
    when_emergency: [
      'Dor abdominal muito intensa',
      'Vômitos associados',
      'Febre alta',
      'Sinais de obstrução intestinal'
    ],
    safe_care: [
      'Aumente ingestão de líquidos',
      'Alimentação rica em fibras',
      'Atividade física adequada',
      'Massagem abdominal suave'
    ],
    dont_do: [
      'Não use laxantes sem orientação',
      'Não force evacuação',
      'Não ignore em bebês',
      'Não use supositórios caseiros'
    ]
  },
  {
    id: 'assadura',
    name: 'Assadura',
    what: 'Irritação da pele na área das fraldas, geralmente vermelha e dolorida.',
    common_causes: [
      'Umidade prolongada',
      'Fraldas sujas',
      'Produtos irritantes',
      'Infecções fúngicas',
      'Alergia a materiais'
    ],
    home_monitor: [
      'Observe vermelhidão e irritação',
      'Verifique se há infecção (bolhas, pus)',
      'Monitore comportamento da criança',
      'Note frequência de troca de fraldas'
    ],
    when_to_seek: [
      'Assadura persistente',
      'Sinais de infecção',
      'Dor intensa',
      'Criança com febre'
    ],
    when_emergency: [
      'Infecção grave com pus e febre',
      'Assadura em bebês prematuros',
      'Dor extrema impedindo atividades',
      'Sinais de sepse'
    ],
    safe_care: [
      'Troque fraldas frequentemente',
      'Limpe com água morna',
      'Deixe área secar ao ar',
      'Use cremes protetores adequados'
    ],
    dont_do: [
      'Não use talco ou produtos irritantes',
      'Não deixe fralda úmida por muito tempo',
      'Não use cremes sem indicação',
      'Não ignore sinais de infecção'
    ]
  },
  {
    id: 'conjuntivite',
    name: 'Conjuntivite',
    what: 'Inflamação da conjuntiva, membrana que cobre o olho.',
    common_causes: [
      'Infecções virais ou bacterianas',
      'Alergias',
      'Irritação química',
      'Corpo estranho',
      'Bloqueio do ducto lacrimal'
    ],
    home_monitor: [
      'Observe vermelhidão e inchaço',
      'Note secreção (cor e quantidade)',
      'Verifique se há dor ou coceira',
      'Monitore visão'
    ],
    when_to_seek: [
      'Sintomas persistentes por 2-3 dias',
      'Secreção purulenta',
      'Dor intensa',
      'Visão comprometida'
    ],
    when_emergency: [
      'Dor ocular intensa',
      'Perda súbita de visão',
      'Inchaço grave',
      'Febre alta associada'
    ],
    safe_care: [
      'Limpe olhos com compressas limpas',
      'Aplique compressas frias',
      'Evite coçar os olhos',
      'Mantenha higiene das mãos'
    ],
    dont_do: [
      'Não use colírios sem prescrição',
      'Não compartilhe toalhas',
      'Não force abertura dos olhos',
      'Não ignore em recém-nascidos'
    ]
  },
  {
    id: 'dor-de-ouvido',
    name: 'Dor de ouvido',
    what: 'Dor na região do ouvido, geralmente acompanhada de infecção.',
    common_causes: [
      'Infecções do ouvido médio',
      'Resfriados',
      'Alergias',
      'Corpo estranho',
      'Mudanças de pressão'
    ],
    home_monitor: [
      'Observe intensidade da dor',
      'Note se há febre',
      'Verifique irritabilidade',
      'Monitore audição'
    ],
    when_to_seek: [
      'Dor intensa ou persistente',
      'Febre associada',
      'Secreção no ouvido',
      'Criança com menos de 6 meses'
    ],
    when_emergency: [
      'Dor muito intensa',
      'Febre alta',
      'Secreção com pus',
      'Sinais de infecção grave'
    ],
    safe_care: [
      'Aplique compressa morna',
      'Mantenha criança confortável',
      'Eleve a cabeça',
      'Ofereça analgésicos se indicados'
    ],
    dont_do: [
      'Não use cotonetes no ouvido',
      'Não ignore dor em bebês',
      'Não use remédios caseiros',
      'Não espere melhora espontânea'
    ]
  },
  {
    id: 'dor-abdominal',
    name: 'Dor abdominal',
    what: 'Dor ou desconforto na região do abdômen.',
    common_causes: [
      'Gases ou constipação',
      'Infecções gastrointestinais',
      'Intolerância alimentar',
      'Estresse',
      'Apendicite ou outras condições'
    ],
    home_monitor: [
      'Observe localização e intensidade',
      'Note se há vômitos ou diarreia',
      'Verifique febre',
      'Monitore alimentação'
    ],
    when_to_seek: [
      'Dor intensa ou persistente',
      'Vômitos frequentes',
      'Febre alta',
      'Sinais de desidratação'
    ],
    when_emergency: [
      'Dor abdominal súbita e intensa',
      'Vômitos com sangue',
      'Abdômen rígido',
      'Criança muito pequena'
    ],
    safe_care: [
      'Descanse em posição confortável',
      'Ofereça líquidos',
      'Alimentação leve',
      'Massagem abdominal suave'
    ],
    dont_do: [
      'Não use laxantes sem orientação',
      'Não ignore dor em crianças',
      'Não force alimentação',
      'Não use remédios caseiros fortes'
    ]
  },
  {
    id: 'dor-de-cabeca',
    name: 'Dor de cabeça',
    what: 'Dor ou pressão na região da cabeça.',
    common_causes: [
      'Tensão ou estresse',
      'Fadiga',
      'Desidratação',
      'Infecções',
      'Problemas visuais'
    ],
    home_monitor: [
      'Observe frequência e duração',
      'Note fatores desencadeantes',
      'Verifique se há náuseas',
      'Monitore comportamento'
    ],
    when_to_seek: [
      'Dor de cabeça frequente',
      'Dor intensa ou súbita',
      'Associada a vômitos',
      'Após trauma na cabeça'
    ],
    when_emergency: [
      'Dor de cabeça súbita e intensa',
      'Confusão mental',
      'Convulsões',
      'Perda de consciência'
    ],
    safe_care: [
      'Descanse em ambiente tranquilo',
      'Hidratação adequada',
      'Compressa fria na testa',
      'Rotina de sono regular'
    ],
    dont_do: [
      'Não ignore dores recorrentes',
      'Não use analgésicos excessivamente',
      'Não force atividades',
      'Não hesite em procurar ajuda'
    ]
  },
  {
    id: 'falta-de-ar',
    name: 'Falta de ar',
    what: 'Dificuldade para respirar ou sensação de falta de ar.',
    common_causes: [
      'Infecções respiratórias',
      'Asma ou bronquite',
      'Alergias',
      'Ansiedade',
      'Problemas cardíacos'
    ],
    home_monitor: [
      'Observe frequência respiratória',
      'Note chiado no peito',
      'Verifique cor dos lábios',
      'Monitore esforço para respirar'
    ],
    when_to_seek: [
      'Dificuldade para respirar',
      'Chiado no peito',
      'Lábios azulados',
      'Criança pequena'
    ],
    when_emergency: [
      'Dificuldade extrema para respirar',
      'Cianose (pele azulada)',
      'Criança inconsciente',
      'Parada respiratória'
    ],
    safe_care: [
      'Mantenha calma e posicione confortavelmente',
      'Ambiente fresco e úmido',
      'Evite irritantes',
      'Siga plano de ação para crises'
    ],
    dont_do: [
      'Não ignore sinais de dificuldade',
      'Não use medicações sem prescrição',
      'Não force atividade física',
      'Não hesite em chamar emergência'
    ]
  }
];

export const getSymptomById = (id: string): Symptom | undefined => {
  return symptomsData.find(symptom => symptom.id === id);
};
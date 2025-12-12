export const quiz = [
  { id: 1, title: 'Qual o nome da criança?', type: 'text' },
  { id: 2, title: 'Qual a data de nascimento?', type: 'date' },
  { id: 3, title: 'Sexo (opcional)?', type: 'select', options: ['Masculino', 'Feminino', 'Prefiro não informar'] },
  { id: 4, title: 'A criança usa fraldas?', type: 'yesno' },
  { id: 5, title: 'A criança fala frases completas?', type: 'yesno' },
  { id: 6, title: 'A criança come sozinha?', type: 'yesno' },
  { id: 7, title: 'A criança tem alergias conhecidas?', type: 'text' },
  { id: 8, title: 'Quantidade média de sono por dia (horas)?', type: 'number' },
  { id: 9, title: 'Tempo de tela por dia (em minutos)?', type: 'number' },
  { id: 10, title: 'Quais dispositivos usa? (TV, tablet, celular)', type: 'multiselect', options: ['TV', 'Tablet', 'Celular', 'Nenhum'] },
  { id: 11, title: 'A criança brinca com outras crianças?', type: 'yesno' },
  { id: 12, title: 'A criança responde quando chamada pelo nome?', type: 'yesno' },
  { id: 13, title: 'A criança mantém contato visual?', type: 'yesno' },
  { id: 14, title: 'A criança tem movimentos repetitivos?', type: 'yesno' },
  { id: 15, title: 'A criança se incomoda com barulhos altos?', type: 'yesno' },
  { id: 16, title: 'A criança aponta para objetos de interesse?', type: 'yesno' },
  { id: 17, title: 'A criança imita gestos e sons?', type: 'yesno' },
  { id: 18, title: 'Observações adicionais (opcional)', type: 'textarea' }
];

export default quiz;

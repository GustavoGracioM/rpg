export const setupCharacter = (data) => ({ name: data.name,
  id: data.id,
  healthPoints: data.healthPoints,
  maxHealthPoints: data.maxHealthPoints,
  sanity: data.sanity,
  maxSanity: data.maxSanity,
  effortPoints: data.effortPoints,
  classId: data.class.id,
  class: data.class.type,
  trail: data.trail.name,
  origin: data.origin.name });

const gradeTemplate = {
  destreinado: '0',
  treinado: '+5',
  competente: '+10',
  expert: '+15',
};

const bonus = (expertise) => gradeTemplate[expertise];

export const valuesTypes = [
  { id: 1, type: 'Conhecimento', checked: false },
  { id: 2, type: 'Energia', checked: false },
  { id: 3, type: 'Morte', checked: false },
  { id: 4, type: 'Sangue', checked: false },
  { id: 5, type: 'Medo', checked: false },
];

export const setInputs = {
  name: 'Nome',
  type: 'Tipo',
  circle: 'Circulo',
  execution: 'Execução',
  reach: 'Alcance',
  target: 'Alvo',
  duration: 'Duração',
  resistance: 'Resintencia',
};

export const selects = {
  circle: ['1º', '2º', '3º', '4º', '5º'],
  execution: ['Ação Livre', 'Ação Padrão', 'Ação Completa', 'Reação'],
  reach: ['Pessoal', 'Toque', 'Curto', 'Médio', 'Longo', 'Extremo', 'Ilimitado'],
};

export const degreeTypes = [
  'destreinado',
  'treinado',
  'competente',
  'expert',
];

const two = 2;
const three = 3;
const four = 4;
const five = 5;
const twelve = 12;
const sixteen = 16;
const twenty = 20;

export const setClassStates = (pre, vig) => ({
  especialista: { healthPoints: twenty + vig, sanity: twelve, effortPoints: two + pre },
  combatente: { healthPoints: sixteen + vig, sanity: sixteen, effortPoints: three + pre },
  ocultista: { healthPoints: twelve + vig, sanity: twenty, effortPoints: four + pre },
  mundano: { healthPoints: five, sanity: five, effortPoints: two },
});

export const upperCase = (str) => str[0].toUpperCase() + str.substr(1);

export default bonus;

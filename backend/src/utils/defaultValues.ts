const classValue = [
  {
    type: 'Especialista',
  },
  {
    type: 'Combatente',
  },
  {
    type: 'Ocultista',
  },
];

const gradeTemplate = {
  destreindado: '0',
  treinado: '+5',
  competente: '+10',
  expert: '+15',
};

const attribute = {
  agi: 'agilidade',
  pre: 'presenca',
  int: 'intelecto',
  for: 'forca',
  vig: 'vigor',
};
const yes = 'Sim';
const not = '-';

const skillsValue = [
  {
    name: 'acrobacia',
    attributeBase: attribute.agi,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'adestramento',
    attributeBase: attribute.pre,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'atletismo',
    attributeBase: attribute.for,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'atualidades',
    attributeBase: attribute.int,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'ciencias',
    attributeBase: attribute.int,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'crime',
    attributeBase: attribute.agi,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'diplomacia',
    attributeBase: attribute.pre,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'enganacao',
    attributeBase: attribute.pre,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'fortitude',
    attributeBase: attribute.vig,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'furtividade',
    attributeBase: attribute.agi,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'iniciativa',
    attributeBase: attribute.agi,
    trained: not,
    chargeFine: yes,
  },
  {
    name: 'intimidacao',
    attributeBase: attribute.pre,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'intuicao',
    attributeBase: attribute.int,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'investigacao',
    attributeBase: attribute.pre,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'luta',
    attributeBase: attribute.for,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'medicina',
    attributeBase: attribute.int,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'ocultismo',
    attributeBase: attribute.int,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'percepcao',
    attributeBase: attribute.pre,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'pilotagem',
    attributeBase: attribute.agi,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'pontaria',
    attributeBase: attribute.agi,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'profissao',
    attributeBase: attribute.int,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'reflexos',
    attributeBase: attribute.agi,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'religiao',
    attributeBase: attribute.pre,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'sobrevivencia',
    attributeBase: attribute.int,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'tatica',
    attributeBase: attribute.int,
    trained: yes,
    chargeFine: not,
  },
  {
    name: 'tecnologia',
    attributeBase: attribute.int,
    trained: not,
    chargeFine: not,
  },
  {
    name: 'vontade',
    attributeBase: attribute.pre,
    trained: not,
    chargeFine: not,
  },
];

export default { classValue, skillsValue, gradeTemplate };
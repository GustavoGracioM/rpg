const gradeTemplate = {
  destreindado: '0',
  treinado: '+5',
  competente: '+10',
  expert: '+15',
};

const bonus = (expertise) => gradeTemplate[expertise];

export const upperCase = (str) => str[0].toUpperCase() + str.substr(1);

export default bonus;

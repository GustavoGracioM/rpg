import React, { useEffect, useState } from 'react';
import rollParser from 'roll-parser';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import api from '../../service/api';
import { upperCase } from '../../utils/utils';

const ten = 10;

const getAttribute = (expertiseAll, attributes, name) => {
  const findExpertise = expertiseAll.find((e) => e.name === name);
  const attributeBase = attributes[findExpertise.attributeBase];
  return { attributeBase, findExpertise };
};

const defineRoll = (attributeBase) => {
  if (attributeBase === 0) {
    const { rolls } = rollParser.parseAndRoll('2d20');
    const resultRolls = Math.min(...rolls);
    return { rolls, resultRolls };
  }
  const { rolls } = rollParser.parseAndRoll(`${attributeBase}d20`);
  const resultRolls = Math.max(...rolls);
  return { rolls, resultRolls };
};

const defineMessage = ({ name, findExpertise, resultRolls, bonus, amount, rolls }) => {
  const returnMessage = `${upperCase(name)} + ${upperCase(findExpertise.attributeBase)}:
  ${resultRolls} + ${bonus} = ${amount}
  Valor dos Dados:${rolls.map((r) => ` ${r}`)}`;
  return returnMessage;
};

function ButtonRotate(prop) {
  const { expertise } = prop;
  const params = useParams();
  const { bonus, name, attributes } = expertise;
  const [expertiseAll, setExpertiseAll] = useState([]);

  useEffect(() => {
    api.get('/expertise').then((r) => setExpertiseAll(r.data));
  }, []);

  const validateBoard = ({ amount, returnMessage }) => {
    const { characterId, boardId } = params;
    if (!characterId && !boardId) return console.log(returnMessage);
    api.post('/history-roll', {
      amount, returnMessage, characterId, boardId, type: 'expertise' })
      .then((r) => console.log(r.data));
  };

  const rotate = () => {
    const { attributeBase, findExpertise } = getAttribute(expertiseAll, attributes, name);
    const { rolls, resultRolls } = defineRoll(attributeBase);
    const defineBonus = bonus === '0' ? 0 : parseInt(bonus.split('+')[1], ten);
    const amount = resultRolls + defineBonus;
    const returnMessage = defineMessage({ name,
      findExpertise,
      resultRolls,
      bonus: defineBonus,
      amount,
      rolls,
    });
    validateBoard({ amount, returnMessage });
  };

  return (
    <Button variant="contained" type="button" onClick={ rotate }>Rodar</Button>
  );
}

export default ButtonRotate;

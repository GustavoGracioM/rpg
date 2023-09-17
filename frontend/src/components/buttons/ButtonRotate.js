import React, { useEffect, useState } from 'react';
import rollParser from 'roll-parser';
import { useParams } from 'react-router-dom';
import api from '../../service/api';
import bonus, { upperCase } from '../../utils/utils';

const ten = 10;

function ButtonRotate(prop) {
  const { expertise } = prop;
  const params = useParams();
  const { grade, key, attributes } = expertise;
  const [expertiseAll, setExpertiseAll] = useState([]);

  useEffect(() => {
    api.get('/skills').then((r) => setExpertiseAll(r.data));
  }, []);

  const validateBoard = ({ amount, returnMessage }) => {
    const { characterId, boardId } = params;
    if (!characterId && !boardId) return console.log(returnMessage);
    console.log(amount, characterId);
    api.post('/history-roll', {
      amount, returnMessage, characterId, boardId, type: 'expertise' })
      .then((r) => console.log(r.data));
  };

  const rotate = () => {
    const findExpertise = expertiseAll.find((e) => e.name === key);
    const attributeBase = attributes[findExpertise.attributeBase] + 1;
    const { rolls } = rollParser.parseAndRoll(`${attributeBase}d20`);
    const maxRoll = Math.max(...rolls);
    const addBonus = bonus(grade) === '0' ? '+0' : bonus(grade);
    const bonusSum = parseInt(addBonus.split('+')[1], ten);
    const amount = maxRoll + bonusSum;
    const returnMessage = `${upperCase(key)} + ${upperCase(findExpertise.attributeBase)}:
${maxRoll} + ${bonusSum} = ${amount}
Valor dos Dados: ${rolls}`;
    validateBoard({ amount: maxRoll + bonusSum, returnMessage });
  };

  return (
    <button type="button" onClick={ rotate }>Rodar</button>
  );
}

export default ButtonRotate;

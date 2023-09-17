import React, { useEffect, useState } from 'react';
import rollParser from 'roll-parser';
import { useParams } from 'react-router-dom';
import api from '../../service/api';
import AttacksCreate from './AttacksCreate';

const sum = (total, item) => total + item.value;

const validateAttack = ({ amount, returnMessage, characterId, boardId }) => {
  api.post('/history-roll', {
    amount, returnMessage, characterId, boardId, type: 'attack' })
    .then((r) => console.log(r.data));
};

function Attacks() {
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    api.get(`/attacks/${characterId}`).then((r) => setAttacks(r.data));
  }, []);

  const deleteAttack = (id) => {
    api.delete(`/attacks/${id}`)
      .then(() => api.get('/attacks')
        .then((i) => setAttacks(i.data)));
  };

  const rotate = (attack) => {
    const dices = attack.dice.split('+').map((b) => rollParser.parseAndRoll(b));
    const amount = dices.reduce(sum, 0);
    const dicesMessage = dices.map((oo) => oo.rolls).map((ii) => `\nDado: ${ii}`);
    const returnMessage = `${attack.dice}+${attack.bonus}: \n${dicesMessage}`;
    const { boardId } = params;
    if (!boardId) return console.log(returnMessage);
    validateAttack({ amount, returnMessage, characterId, boardId });
  };

  return (
    <>
      <h1>Ataques </h1>
      <AttacksCreate setAttacks={ setAttacks } />
      {attacks && attacks.map((a) => (
        <>
          <p key={ a.id }>{a.name}</p>
          <p key={ a.id }>{a.dice}</p>
          <p key={ a.id }>{a.bonus}</p>
          <button type="button" onClick={ () => rotate(a) }>Rodar</button>
          <button type="button" onClick={ () => deleteAttack(a.id) }>
            Delete
          </button>
        </>
      ))}
    </>
  );
}

export default Attacks;

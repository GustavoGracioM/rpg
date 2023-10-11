import React from 'react';
import api from '../../service/api';
import { setupCharacter } from '../../utils/utils';

const template = {
  name: 'Nome',
  healthPoints: 'Pontos de Vida',
  maxHealthPoints: 'Pontos Maximos de Vida',
  sanity: 'Sanidade',
  maxSanity: 'Maximo de Sanidade',
  effortPoints: 'PE',
  class: 'Classe',
  trail: 'Trilha',
  origin: 'Origem',
};

const getStatus = (key) => key === 'healthPoints'
|| key === 'sanity'
|| key === 'maxHealthPoints'
|| key === 'maxSanity'
|| key === 'effortPoints';

function CharacterInfo(prop) {
  const { character, setCharacter } = prop;

  const more = (key) => {
    api.put(`/character/${character.id}`, { [key]: character[key] + 1 })
      .then(() => api.get(`/character/${character.id}`))
      .then((r) => setCharacter(setupCharacter(r.data)));
  };

  const less = (key) => {
    api.put(`/character/${character.id}`, { [key]: character[key] - 1 })
      .then(() => api.get(`/character/${character.id}`))
      .then((r) => setCharacter(setupCharacter(r.data)));
  };

  return Object.keys(character).map((key) => (key !== 'id' && key !== 'classId') && (
    <>
      <p key={ key }>{`${template[key]}: ${character[key]}`}</p>
      {getStatus(key) && (
        <>
          <button type="button" onClick={ () => more(key) }>+</button>
          <button type="button" onClick={ () => less(key) }>-</button>
        </>
      )}
    </>
  ));
}

export default CharacterInfo;

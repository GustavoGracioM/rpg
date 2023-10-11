import React from 'react';
import ClassUpdate from './ClassUpdate';

const template = {
  name: 'Nome',
  healthPoints: 'Pontos de Vida',
  maxHealthPoints: 'Pontos Maximos de Vida',
  sanity: 'Sanidade',
  maxSanity: 'Maximo de Sanidade',
  effortPoints: 'PE',
};

function CharacterUpdate(prop) {
  const { character, type: key, register } = prop;

  const inputs = () => (
    <>
      <label htmlFor={ character[key] }>{`${template[key]}: `}</label>
      <input
        { ...register(key) }
        name={ key }
        defaultValue={ character[key] }
        id={ character[key] }
      />
    </>
  );

  if (key === 'class' || key === 'origin' || key === 'trail') {
    return (<ClassUpdate type={ key } character={ character } register={ register } />);
  }
  return inputs();
}

export default CharacterUpdate;

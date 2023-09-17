import React from 'react';
import ClassUpdate from './ClassUpdate';

const template = {
  name: 'Nome',
  healthPoints: 'Pontos de Vida',
  sanity: 'Sanidade',
  effortPoints: 'PE',
  class: 'Classe',
};

function CharacterUpdate(prop) {
  const {
    character, type: key, releaseButton, register, control } = prop;

  const inputs = () => (
    <>
      <label htmlFor={ character[key] }>{`${template[key]}: `}</label>
      <input
        { ...register(key) }
        name={ key }
        onClick={ (() => releaseButton(key)) }
        defaultValue={ character[key] }
        id={ character[key] }
      />
    </>
  );

  if (key === 'class') {
    return (<ClassUpdate
      register={ register }
      character={ character }
      releaseButton={ releaseButton }
      type={ key }
      control={ control }
    />);
  }
  return inputs();
}

export default CharacterUpdate;

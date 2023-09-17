import React from 'react';

function CharacterCreate(prop) {
  const { characterClass, register } = prop;
  return (
    <>
      <h1>Informações Basicas</h1>
      <p>Nome: </p>
      <input name="name" { ...register('name') } />
      <p>Pontos de Vida: </p>
      <input name="healthPoints" { ...register('healthPoints') } />
      <p>Pontos de Esforço: </p>
      <input name="effortPoints" { ...register('effortPoints') } />
      <p>Sanidade: </p>
      <input name="sanity" { ...register('sanity') } />
      <p htmlFor="class">
        Classe:
        <select defaultValue="2" id="class" { ...register('classId') }>
          {characterClass
            .map((c) => <option key={ c.id } value={ c.id }>{c.type}</option>)}
        </select>
      </p>
      {' '}
    </>
  );
}

export default CharacterCreate;

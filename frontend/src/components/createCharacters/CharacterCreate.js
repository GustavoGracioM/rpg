import React from 'react';

function CharacterCreate(prop) {
  const { register } = prop;
  return (
    <>
      <h1>Informações Basicas</h1>
      <p>Nome: </p>
      <input name="name" { ...register('name') } />

    </>
  );
}

export default CharacterCreate;

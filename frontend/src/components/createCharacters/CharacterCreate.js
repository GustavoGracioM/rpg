import React from 'react';
import { TextField } from '@mui/material';

function CharacterCreate(prop) {
  const { register } = prop;
  return (
    <>
      <h1>Informações Basicas</h1>
      <TextField label="Nome" name="name" variant="standard" { ...register('name') } />

    </>
  );
}

export default CharacterCreate;

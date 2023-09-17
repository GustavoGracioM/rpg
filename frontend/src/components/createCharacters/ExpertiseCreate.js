import React from 'react';
import { upperCase } from '../../utils/utils';

const gradeTemplate = ['destreindado', 'treinado', 'competente', 'expert'];

function ExpertiseCreate(prop) {
  const { skills, register } = prop;
  return (
    <>
      <h1>Pericias</h1>
      {skills.map((s) => (
        <>
          <p>
            {upperCase(s.name)}
            {' '}
          </p>
          <select { ...register(s.name) }>
            {gradeTemplate.map((g) => (
              <option key={ g } value={ g }>{upperCase(g)}</option>
            ))}
          </select>
          <br />
        </>))}
      <br />
    </>
  );
}

export default ExpertiseCreate;

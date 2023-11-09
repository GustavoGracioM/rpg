import React from 'react';
import { upperCase } from '../../utils/utils';

const optionsSkills = ['agilidade', 'forca', 'intelecto', 'presenca', 'vigor'];

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5 };

function AttributesCreate(prop) {
  const { register } = prop;
  return (
    <>
      <h1>Atributos</h1>
      {optionsSkills.map((o) => (
        <p key={ o } htmlFor={ o }>
          {upperCase(o)}
          :
          {' '}
          <select defaultChecked={ 0 } { ...register(o) } id={ o }>
            {Object.values(numbers).map((g) => (
              <option key={ g } value={ g }>{g}</option>
            ))}
          </select>
        </p>
      ))}
    </>
  );
}

export default AttributesCreate;

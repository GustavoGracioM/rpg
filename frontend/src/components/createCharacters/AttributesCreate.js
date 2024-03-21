import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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
        <FormControl key={ o } variant="standard" sx={ { m: 1, minWidth: 120 } }>
          <InputLabel key={ o } htmlFor={ o } id={ o }>
            {upperCase(o)}
          </InputLabel>
          <Select defaultChecked={ 0 } { ...register(o) } id={ o }>
            {Object.values(numbers).map((g) => (
              <MenuItem key={ g } value={ g }>{g}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
}

export default AttributesCreate;

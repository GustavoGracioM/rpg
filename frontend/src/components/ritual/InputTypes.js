import React, { useState } from 'react';
import { valuesTypes } from '../../utils/utils';

function InputTypes(prop) {
  const { register } = prop;
  const [defaultTypes, setDefaultTypes] = useState(valuesTypes);

  const toglleCheckBox = (id) => {
    setDefaultTypes(defaultTypes
      .map((t) => ((t.id === id) ? { ...t, checked: !t.checked } : t)));
  };
  return defaultTypes.map(({ id, type, checked }) => (
    <label key={ id } htmlFor={ type }>
      {type}
      <input
        type="radio"
        value={ type }
        id={ type }
        checked={ checked }
        { ...register(type) }
        onClick={ () => toglleCheckBox(id) }
      />
    </label>
  ));
}

export default InputTypes;

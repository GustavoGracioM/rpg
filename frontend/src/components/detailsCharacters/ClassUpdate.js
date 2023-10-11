import React, { useEffect, useState } from 'react';
import api from '../../service/api';

const template = {
  class: 'Classe',
  trail: 'Trilha',
  origin: 'Origem',
};

function ClassUpdate(prop) {
  const { character, register, type } = prop;
  const [classSelect, setClassSelect] = useState({});
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    api.get(`/${type}`).then((response) => {
      setClassSelect(response.data.find((c) => {
        const result = c.type ? c.type : c.name;
        return result === character[type];
      }));
      setAllClass(response.data);
    });
  }, []);

  const setClass = (value) => {
    const resultClass = allClass.find((a) => a.id === parseInt(value, 10));
    setClassSelect(resultClass);
  };
  return (
    <label htmlFor={ type }>
      {`${template[type]}`}
      <select
        value={ classSelect.id }
        id={ type }
        { ...register(`${type}Id`) }
        onChange={ (e) => setClass(e.target.value) }
      >
        {allClass
          .map((a) => (
            <option
              key={ a.id }
              value={ a.id }
            >
              {type === 'class' ? a.type : a.name}
            </option>
          ))}
      </select>

    </label>
  );
}

export default ClassUpdate;

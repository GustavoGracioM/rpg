import React, { useEffect, useState } from 'react';
import api from '../../service/api';

function ClassUpdate(prop) {
  const { character, type: key, register, releaseButton } = prop;
  const [classSelect, setClassSelect] = useState({});
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    api.get('/class').then((response) => {
      setClassSelect(response.data.find((c) => c.type === character.class));
      setAllClass(response.data);
    });
  }, []);

  const setClass = (value) => {
    const resultClass = allClass.find((a) => a.id === parseInt(value, 10));
    setClassSelect(resultClass);
    releaseButton(key);
  };
  return (
    <select
      value={ classSelect.id }
      { ...register('classId') }
      onChange={ (e) => setClass(e.target.value) }
    >
      {allClass
        .map((a) => <option key={ a.id } value={ a.id }>{a.type}</option>)}
    </select>
  );
}

export default ClassUpdate;

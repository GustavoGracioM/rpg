import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import api from '../../service/api';
import Ritual from './Ritual';
import InputTypes from './InputTypes';
import { valuesTypes, setInputs, selects } from '../../utils/utils';

const filterInputs = (data) => {
  const ritual = {};
  const h = valuesTypes.map((t) => t.type);
  Object.keys(data).forEach((d) => {
    if (!h.includes(d)) ritual[d] = data[d];
  });
  return ritual;
};

const findSelect = (key, register) => {
  const index = Object.keys(selects).find((s) => s === key);
  return (
    <>
      <span>{index}</span>
      <select { ...register(index) }>
        {selects[index].map((s) => (<option key={ s } value={ s }>{s}</option>))}
      </select>
    </>
  );
};

const getRituals = (id, setRituals) => {
  api.get(`/ritual/${id}`)
    .then((r) => setRituals(r.data));
};

function Rituals() {
  const params = useParams();
  const id = params.id ? params.id : params.characterId;
  const { handleSubmit, register } = useForm();
  const [rituals, setRituals] = useState([]);
  useEffect(() => {
    getRituals(id, setRituals);
  }, []);
  const getTypes = (data) => {
    const types = [];
    valuesTypes.forEach((t) => Object.keys(data)
      .forEach((d) => data[d] === t.type && types.push(t.type)));
    return types;
  };

  const onSubmit = (data) => {
    const ritual = filterInputs(data);
    ritual.type = getTypes(data);
    api.post('/ritual', { ...ritual, characterId: id })
      .then(() => getRituals(id, setRituals));
  };

  return (
    <>
      <h1>Rituais</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        {Object.keys(setInputs).map((i) => {
          if (i === 'type') return <InputTypes register={ register } />;
          if (i === 'circle' || i === 'execution' || i === 'reach') {
            return findSelect(i, register);
          }
          return (
            <label key={ i } htmlFor={ i }>
              {setInputs[i]}
              <input { ...register(i) } id={ i } />
            </label>
          );
        })}
        <button type="submit">Adicionar</button>
      </form>
      <Ritual rituals={ rituals } getRituals={ getRituals } setRituals={ setRituals } />
    </>
  );
}

export default Rituals;

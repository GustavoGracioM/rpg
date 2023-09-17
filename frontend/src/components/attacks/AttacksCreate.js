import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

const formInfo = {
  name: 'Nome',
  dice: 'Dados',
  bonus: 'Bonus',
};

function AttacksCreate(prop) {
  const { setAttacks } = prop;
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    api.post('/attacks', { ...data, characterId })
      .then(() => api.get(`/attacks/${characterId}`)
        .then((r) => setAttacks(r.data)))
      .catch((r) => console.log(r));
  };
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      {Object.keys(formInfo).map((key) => (
        <label htmlFor={ key } key={ key }>
          {formInfo[key]}
          <input { ...register(key) } name={ key } id={ key } />
        </label>
      ))}
      <button type="submit">Adicionar</button>
    </form>
  );
}
export default AttacksCreate;

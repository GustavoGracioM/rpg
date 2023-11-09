import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../service/api';

const deleteSkill = (id, setSkill, characterId) => {
  api.delete(`/skill/${id}`)
    .then(() => api.get(`/skill/${characterId}`)
      .then((i) => setSkill(i.data)).catch((r) => r));
};

function Skill(prop) {
  const { characterId } = prop;
  const [skill, setSkill] = useState([]);
  const { handleSubmit, register } = useForm();

  const addSkill = (data) => {
    const { name, description } = data;
    api.post('/skill', { name, characterId, description })
      .then((response) => setSkill([...skill, response.data]));
  };

  useEffect(() => {
    if (characterId) {
      api.get(`/skill/${characterId}`)
        .then((s) => setSkill(s.data)).catch((r) => r);
    }
  }, []);

  return (
    <>
      <h1>Habilidades</h1>
      <form
        onSubmit={ handleSubmit(addSkill) }
      >
        <input { ...register('name') } name="name" />
        <input { ...register('description') } name="description" />
        <button type="submit">Adicionar</button>
      </form>
      {skill.length < 1 ? <p>Não tem habilidades</p> : skill.map((i) => (
        <>
          <p>{i.name}</p>
          <p>{i.description}</p>
          <button
            type="button"
            onClick={ () => deleteSkill(i.id, setSkill, characterId) }
          >
            Deletar
          </button>
        </>
      ))}
    </>
  );
}

export default Skill;

import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../../service/api';

function CreateBoard(prop) {
  const { user, setBoards } = prop;
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    api.post('/boards', { ...data, userId: user.id }).then(() => {
      api.post('/boards/user', { userId: user.id }).then((r) => setBoards(r.data));
    });
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="name">
        Nome:
        <input name="name" { ...register('name') } id="name" />
      </label>
      <button type="submit">Criar</button>
    </form>
  );
}

export default CreateBoard;

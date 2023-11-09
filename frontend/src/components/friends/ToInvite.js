import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../../service/api';

function ToInvite(prop) {
  const { user } = prop;
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    if (data.name === user.name) return console.log('Esse é o seu nick');
    api.post('/user/name', data)
      .then((friend) => api
        .post('/friends-list', {
          userId: user.id, friendId: friend.data.id })
        .catch(() => console.log('Já são amigos')))
      .catch(() => console.log('usuario não encotrado'));
  };

  return (
    <>
      <p>ToInvite</p>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">
          Nome de usuario:
          <input name="name" id="name" { ...register('name') } />
        </label>
        <button type="submit">Convidar</button>
      </form>
    </>
  );
}

export default ToInvite;

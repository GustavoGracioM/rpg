import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../../service/api';

function InviteFriends() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api.post('/user/name', data).then((r) => console.log(r.data));
  };

  return (
    <>
      <p>InviteFriends</p>
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

export default InviteFriends;

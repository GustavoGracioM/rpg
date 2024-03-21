import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../service/api';
import DarkThema from '../../components/darkThema/DarkThema';

function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    api
      .post('/register', data)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));
        navigate('/character');
      })
      .catch(() => {
        setErrorMessage('Email ou Senha incorretos');
      });
  }
  return (
    <DarkThema>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input { ...register('name') } name="name" />
        <input { ...register('email') } name="email" />
        <input { ...register('password') } name="password" />
        <button type="submit">cadastrar</button>
        {errorMessage ? <p>{errorMessage}</p> : <br />}
        <br />
      </form>
    </DarkThema>
  );
}

export default Register;

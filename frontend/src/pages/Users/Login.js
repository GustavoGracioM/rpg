import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../service/api';
import DarkThema from '../../components/darkThema/DarkThema';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, register } = useForm();

  const navigateUrl = (url) => {
    navigate(url);
  };

  function onSubmit(data) {
    api
      .post('/login', data)
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
        <input { ...register('email') } name="email" />
        <input { ...register('password') } name="password" />
        <button type="submit">entrar</button>
        {errorMessage ? <p>Email ou Senha Invalidos</p> : <br />}
        <br />
        <button
          type="button"
          onClick={ () => navigateUrl('/register') }
        >
          cadastrar

        </button>
      </form>
    </DarkThema>
  );
}

export default Login;

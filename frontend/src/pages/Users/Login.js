import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../service/api';
import DarkThema from '../../components/darkThema/DarkThema';
import {
  buttonSingIn, registerLink, defaultTextField } from './components/componentsForm';

const boxConfig = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function SignIn() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, register } = useForm();
  function onSubmit(data) {
    api.post('/login', data)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));
        navigate('/character');
      })
      .catch(() => { setErrorMessage('Email ou Senha incorretos'); });
  }
  return (
    <DarkThema>
      <Container component="main" maxWidth="xs">
        <Box sx={ boxConfig }>
          <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <Box
            component="form"
            onSubmit={ handleSubmit(onSubmit) }
            noValidate
            sx={ { mt: 1 } }
          >
            {defaultTextField('email', 'Email Address', register)}
            {defaultTextField('password', 'Password', register)}
            {buttonSingIn('Sign In')}
            {errorMessage ? <p>Email ou Senha Invalidos</p> : <br />}
            {registerLink()}
          </Box>
        </Box>
      </Container>
    </DarkThema>
  );
}

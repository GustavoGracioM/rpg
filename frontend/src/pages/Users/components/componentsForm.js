import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const buttonSingIn = (message) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={ { mt: 3, mb: 2 } }
  >
    {message}
  </Button>
);

const registerLink = () => (
  <Grid container>
    <Grid item>
      <Link
        href="/register"
        variant="body2"
      >
        Cadastrar
      </Link>
    </Grid>
  </Grid>
);

const defaultTextField = (type, label, register) => (
  <TextField
    { ...register(type, label) }
    margin="normal"
    required
    fullWidth
    id={ type }
    label={ label }
    type={ type === 'password' ? type : 'text' }
    name={ type }
    autoComplete={ type }
  />
);

export {
  buttonSingIn, registerLink, defaultTextField,
};

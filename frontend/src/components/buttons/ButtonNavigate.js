import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

function ButtonNavigate(prop) {
  const { name, route } = prop;
  const navigate = useNavigate();
  return (
    <Button onClick={ () => navigate(route) }>
      {name}
    </Button>
  );
}

export default ButtonNavigate;

import React from 'react';
import { Button } from '@mui/material';
import api from '../../service/api';

function ButtonUpdate(prop) {
  const { setIsUpdate, setCheckButton, handleSubmit, type: key, id } = prop;

  const update = (data) => {
    const characterUpdate = { [key]: data[key] };
    api
      .put(`/character/${id}`, characterUpdate);
  };

  return (
    <Button
      type="button"
      onClick={ handleSubmit((data) => {
        update(data);
        setIsUpdate(false);
        setCheckButton();
      }) }
    >
      Update
    </Button>
  );
}

export default ButtonUpdate;

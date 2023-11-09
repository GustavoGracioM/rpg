import React from 'react';
import api from '../../service/api';

function ButtonUpdate(prop) {
  const { setIsUpdate, setCheckButton, handleSubmit, type: key, id } = prop;

  const update = (data) => {
    const characterUpdate = { [key]: data[key] };
    api
      .put(`/character/${id}`, characterUpdate);
  };

  return (
    <button
      type="button"
      onClick={ handleSubmit((data) => {
        update(data);
        setIsUpdate(false);
        setCheckButton();
      }) }
    >
      Update
    </button>
  );
}

export default ButtonUpdate;

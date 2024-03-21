import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

function OriginsCreate(prop) {
  const { originId, setOriginId } = prop;
  const [origins, setOrigins] = useState([]);
  useEffect(() => {
    verifyToken().then(() => {
      api.get('/origin').then((response) => {
        setOrigins(response.data);
        setOriginId(response.data[0].id);
      });
    }).catch(() => navigate('/login'));
  }, []);

  const onHandler = (event) => {
    const id = event.target.value;
    setOriginId(id);
  };

  return (
    <FormControl variant="standard" sx={ { m: 1, minWidth: 120 } }>
      <InputLabel htmlFor="origin" id="origin">
        Origem
      </InputLabel>
      <Select
        value={ originId }
        id="origin"
        onChange={ (e) => onHandler(e) }
      >
        {origins.map((o) => (
          <MenuItem
            key={ o.id }
            value={ o.id }
          >
            {o.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OriginsCreate;

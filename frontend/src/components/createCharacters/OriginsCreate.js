import React, { useEffect, useState } from 'react';
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
    <>
      <p>Origem:</p>
      <select
        value={ originId }
        onChange={ (e) => onHandler(e) }
      >
        {origins.map((o) => (
          <option
            key={ o.id }
            value={ o.id }
          >
            {o.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default OriginsCreate;

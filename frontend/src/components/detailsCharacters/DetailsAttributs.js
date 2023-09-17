import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { upperCase } from '../../utils/utils';
import api from '../../service/api';

const minUpdate = -1;
const maxUpdate = 4;
function DetailsAttributs(prop) {
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const { attributes, setAttributes } = prop;
  const [id, setId] = useState();

  useEffect(() => {
    api.get(`/character/${characterId}`).then((r) => {
      setAttributes(r.data.attributes);
      setId(r.data.attributesId);
    });
  }, []);

  const updateAttributes = (value) => {
    api.put(`/attributes/${id}`, value)
      .then(() => api.get(`/attributes/${id}`)
        .then((response) => {
          delete response.data.id;
          setAttributes(response.data);
        }));
  };

  const more = (key) => {
    if (attributes[key] >= maxUpdate) return 1;
    const t = { [key]: attributes[key] + 1 };
    updateAttributes(t);
  };

  const less = (key) => {
    if (attributes[key] <= minUpdate) return 1;
    const t = { [key]: attributes[key] - 1 };
    updateAttributes(t);
  };

  return (
    <>
      <h1>Atributos</h1>
      <form>
        {Object.keys(attributes)
          .map((key) => (
            <>
              <p key={ attributes[key] }>{`${upperCase(key)}: ${attributes[key]}`}</p>
              <button type="button" onClick={ () => more(key) }>+</button>
              <button type="button" onClick={ () => less(key) }>-</button>
            </>))}
      </form>
    </>
  );
}

export default DetailsAttributs;

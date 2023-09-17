import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bonus, { upperCase } from '../../utils/utils';
import api from '../../service/api';
import ButtonRotate from '../buttons/ButtonRotate';

const template = ['destreindado', 'treinado', 'competente', 'expert'];

const updateExpertise = (value, id, setExpertise) => {
  api.put(`/expertise/${id}`, value).then(() => api.get(`/expertise/${id}`)
    .then((response) => {
      delete response.data.id;
      setExpertise(response.data);
    }));
};

function DetailsExpertise(prop) {
  const { attributes } = prop;
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const [expertise, setExpertise] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    api.get(`/character/${characterId}`).then((r) => {
      setExpertise(r.data.expertise);
      setId(r.data.expertiseId);
    });
  }, []);

  const more = (key) => {
    if (expertise[key] === 'expert') return 'aaaaaa';
    const result = { [key]: template[template.indexOf(expertise[key]) + 1] };
    updateExpertise(result, id, setExpertise);
  };

  const less = (key) => {
    if (expertise[key] === 'destreindado') return 'aaaaaa';
    const result = { [key]: template[template.indexOf(expertise[key]) - 1] };
    updateExpertise(result, id, setExpertise);
  };

  return (
    <>
      <h1>Pericias</h1>
      {Object.keys(expertise).map((key) => (
        <>
          <p key={ key }>
            {`${upperCase(key)}: ${upperCase(expertise[key])} ${bonus(expertise[key])}`}
          </p>
          <button type="button" onClick={ () => more(key) }>+</button>
          <button type="button" onClick={ () => less(key) }>-</button>
          <ButtonRotate
            expertise={ { grade: expertise[key], key, attributes } }
          />
        </>
      ))}

    </>
  );
}

export default DetailsExpertise;

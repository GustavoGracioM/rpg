import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';
import CharacterUpdate from './CharacterUpdate';
import CharacterInfo from './CharacterInfo';
import { setupCharacter } from '../../utils/utils';

const buttonEdit = (setIsEdit) => (
  <>
    <button type="submit">Salvar</button>
    <button type="button" onClick={ () => setIsEdit(false) }>Cancelar</button>
  </>

);

const update = (characterId, setCharacter, filterEdit) => {
  api.put(`/character/${characterId}`, filterEdit).then(() => {
    api.get(`/character/${characterId}`)
      .then((r) => setCharacter(setupCharacter(r.data)));
  });
};

function CharacterDetails(prop) {
  const { character, setCharacter } = prop;
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.get(`/character/${characterId}`).then((response) => {
        if (response.data.userId !== userInfo.id) navigate('/character');
      });
    }).catch(() => navigate('/login'));
  }, []);

  const salved = (data) => {
    const filterEdit = {};
    Object.keys(data).filter((key) => {
      if (key === 'name') return data[key] !== character[key];
      return character[key] !== parseInt(data[key], 10);
    }).forEach((key) => data[key] !== '' && (filterEdit[key] = data[key]));
    update(characterId, setCharacter, filterEdit);
    setIsEdit(false);
  };

  if (!character) return <h1>Personagem não encontrado</h1>;
  return isEdit ? (
    <form onSubmit={ handleSubmit(salved) }>
      {Object.keys(character)
        .map((key) => (key !== 'id' && key !== 'classId') && (
          <div key={ key }>
            <CharacterUpdate
              character={ character }
              type={ key }
              register={ register }
            />
          </div>
        ))}
      {isEdit && buttonEdit(setIsEdit)}
    </form>
  ) : (
    <>
      <CharacterInfo character={ character } setCharacter={ setCharacter } />
      <button type="button" onClick={ () => setIsEdit(!isEdit) }>Editar</button>
    </>
  );
}
export default CharacterDetails;

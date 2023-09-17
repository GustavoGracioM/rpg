import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';
import CharacterUpdate from './CharacterUpdate';
import ButtonUpdate from '../buttons/ButtonUpdate';

function DetailsCharacter(prop) {
  const character = prop;
  const params = useParams();
  const characterId = params.id ? params.id : params.characterId;
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const [checkButton, setCheckButton] = useState('');
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.get(`/character/${characterId}`).then((response) => {
        if (response.data.userId !== userInfo.id) navigate('/character');
      });
    }).catch(() => navigate('/login'));
  }, []);

  const releaseButton = (key) => {
    setCheckButton(key);
    setIsUpdate(true);
  };

  const buttonUpdate = (key) => (
    <ButtonUpdate
      type={ key === 'class' ? 'classId' : key }
      id={ character.id }
      setIsUpdate={ setIsUpdate }
      setCheckButton={ setCheckButton }
      handleSubmit={ handleSubmit }
    />
  );
  if (!character) return <h1>Personagem não encontrado</h1>;
  return (
    <div>
      <form>
        {Object.keys(character).map((key) => key !== 'id' && (
          <div key={ key }>
            <CharacterUpdate
              character={ character }
              type={ key }
              releaseButton={ releaseButton }
              register={ register }
            />
            {(isUpdate && checkButton === key) && buttonUpdate(key)}
          </div>
        ))}
      </form>
    </div>
  );
}
export default DetailsCharacter;

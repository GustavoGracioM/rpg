import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../service/api';
import verifyToken from '../../utils/verifyToken';
import CharacterDetails from '../../components/detailsCharacters/CharacterDetails';
import AttributsDetails from '../../components/detailsCharacters/AttributsDetails';
import ExpertiseDetails from '../../components/detailsCharacters/ExpertiseDetails';
import Inventory from '../../components/inventory/Inventory';
import Attacks from '../../components/attacks/Attacks';
import NavBar from '../../components/navbar/NavBar';
import Rituals from '../../components/ritual/Rituals';
import { setupCharacter } from '../../utils/utils';

function Character() {
  const params = useParams();
  const id = params.id ? params.id : params.characterId;
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState({});
  const [character, setCharacter] = useState({});
  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.get(`/character/${id}`).then((r) => {
        if (r.data.userId !== userInfo.id) navigate('/character');
        setCharacter(setupCharacter(r.data));
      });
    }).catch(() => navigate('/login'));
  }, []);

  const deleteCharacter = () => {
    api.delete(`character/${id}`).then(() => navigate('/character'));
  };

  if (!character) return <h1>Personagem não encontrado</h1>;
  return (
    <>
      <NavBar />
      <button type="button" onClick={ deleteCharacter }>Deletar</button>
      {params.boardId && (
        <button
          type="button"
          onClick={ () => navigate(`/board-history/${params.boardId}`) }
        >
          Historico
        </button>
      )}
      <CharacterDetails character={ character } setCharacter={ setCharacter } />
      <AttributsDetails attributes={ attributes } setAttributes={ setAttributes } />
      <ExpertiseDetails attributes={ attributes } />
      <Rituals />
      <Attacks />
      <Inventory characterId={ character.id } />
    </>
  );
}

export default Character;

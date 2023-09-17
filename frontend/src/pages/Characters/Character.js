import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../service/api';
import verifyToken from '../../utils/verifyToken';
import DetailsCharacter from '../../components/detailsCharacters/DetailsCharacter';
import DetailsAttributs from '../../components/detailsCharacters/DetailsAttributs';
import DetailsExpertise from '../../components/detailsCharacters/DetailsExpertise';
import Inventory from '../../components/inventory/Inventory';
import Attacks from '../../components/attacks/Attacks';

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
        setCharacter({ name: r.data.name,
          id: r.data.id,
          healthPoints: r.data.healthPoints,
          sanity: r.data.sanity,
          effortPoints: r.data.effortPoints,
          class: r.data.class.type });
      });
    }).catch(() => navigate('/login'));
  }, []);

  const deleteCharacter = () => {
    api.delete(`character/${id}`).then(() => navigate('/character'));
  };

  if (!character) return <h1>Personagem não encontrado</h1>;
  return (
    <>
      <button type="button" onClick={ deleteCharacter }>Deletar</button>
      {params.boardId && (
        <button
          type="button"
          onClick={ () => navigate(`/board-history/${params.boardId}`) }
        >
          Historico
        </button>

      )}
      <DetailsCharacter { ...character } />
      <DetailsAttributs attributes={ attributes } setAttributes={ setAttributes } />
      <DetailsExpertise
        attributes={ attributes }
      />
      <Attacks />
      <Inventory characterId={ character.id } />
    </>
  );
}

export default Character;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../service/api';
import verifyToken from '../../utils/verifyToken';
import CharactersAll from '../../components/CharactersAll';

function Characters() {
  const navigate = useNavigate();
  const [, setUser] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
      api.post('/character/user', { id: userInfo.id })
        .then((response) => {
          setCharacters(response.data);
        });
    }).catch(() => navigate('/login'));
  }, []);

  return (
    <>
      <CharactersAll characters={ characters } setCharacters={ setCharacters } />
      <button
        type="button"
        onClick={ () => navigate('/character/create') }
      >
        Criar Personagem
      </button>
      <button
        type="button"
        onClick={ () => navigate('/boards') }
      >
        Boards
      </button>
      <button
        type="button"
        onClick={ () => navigate('/invites') }
      >
        Invites
      </button>
    </>
  );
}

export default Characters;

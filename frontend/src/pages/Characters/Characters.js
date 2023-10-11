import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../service/api';
import verifyToken from '../../utils/verifyToken';
import CharactersAll from '../../components/CharactersAll';
import NavBar from '../../components/navbar/NavBar';

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
      <NavBar />
      <button type="button" onClick={ () => navigate('/character/create') }>
        Criar Personagem
      </button>
      <CharactersAll characters={ characters } setCharacters={ setCharacters } />
    </>
  );
}

export default Characters;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

function Board() {
  const params = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.post('/character/user', { id: userInfo.id })
        .then((response) => {
          setCharacters(response.data);
        });
      api.get(`/boards/${params.id}`).then((r) => setBoard(r.data));
    }).catch((e) => console.log(e));
  }, []);

  return (
    <>
      {board && <h1>{board.name}</h1>}
      {characters.map((c) => (
        <>
          <p key={ c.id }>{c.name}</p>
          <button
            type="button"
            onClick={ () => navigate(`/boards/${params.id}/character/${c.id}`) }
          >
            Selecionar
          </button>
        </>
      ))}
    </>
  );
}

export default Board;

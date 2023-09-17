import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import CreateBoard from '../../components/boards/CreateBoard';
import verifyToken from '../../utils/verifyToken';

function Boards() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});
  const deleteBoard = (id) => {
    api.delete(`/boards/${id}`).then(() => {
      api.get('/boards').then((r) => setBoards(r.data));
    });
  };

  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
      api.get('/boards').then((r) => setBoards(r.data));
    }).catch(() => navigate('/login'));
  }, []);
  return (
    <>
      <h1>Boards</h1>
      <CreateBoard user={ user } setBoards={ setBoards } />
      {boards.map((b) => (
        <>
          <p key={ b.id }>{b.name}</p>
          <button
            type="button"
            onClick={ () => navigate(`/boards/${b.id}`) }
          >
            Detalhes
          </button>
          <button
            type="button"
            onClick={ () => navigate(`/board-history/${b.id}`) }
          >
            Historico
          </button>
          <button
            type="button"
            onClick={ () => deleteBoard(b.id) }
          >
            Deletar
          </button>
        </>
      ))}
    </>
  );
}

export default Boards;

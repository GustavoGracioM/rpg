import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';

function BoardsList(prop) {
  const navigate = useNavigate();
  const { board, setBoards, userId, isDelete } = prop;

  const deleteBoard = (id) => {
    api.delete(`/boards/${id}`).then(() => {
      api.post('/boards/user', { userId }).then((r) => setBoards(r.data));
    });
  };

  return (
    <>
      <p key={ board.id }>{board.name}</p>
      <button type="button" onClick={ () => navigate(`/boards/${board.id}`) }>
        Detalhes
      </button>
      <button type="button" onClick={ () => navigate(`/board-history/${board.id}`) }>
        Historico
      </button>
      {isDelete && (
        <button type="button" onClick={ () => deleteBoard(board.id) }>
          Deletar
        </button>
      )}

    </>
  );
}

export default BoardsList;

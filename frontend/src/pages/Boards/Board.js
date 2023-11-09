import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';
import IniviteFriendsBoard from '../../components/boards/InviteFriendsBoard';
import NavBar from '../../components/navbar/NavBar';

function Board() {
  const params = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [users, setUsers] = useState([]);
  const [board, setBoard] = useState();

  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.post('/character/user', { id: userInfo.id })
        .then((response) => {
          setCharacters(response.data);
        });
      api.get(`/board-user/${params.id}`).then((r) => setUsers(r.data));
      api.get(`/boards/${params.id}`).then((r) => setBoard(r.data));
    }).catch((e) => console.log(e));
  }, []);

  return (
    <>
      <NavBar />
      {board && (
        <>
          <h1>{board.name}</h1>
          <h3>{`Dono: ${board.user.name}`}</h3>
        </>
      )}
      <h2>Players</h2>
      {users.map((u) => <p key={ u.user.id }>{u.user.name}</p>)}
      <IniviteFriendsBoard />
      <h2>Seus Personagens</h2>
      {characters && characters.map((c) => (
        <>
          <p key={ `${c.id}` }>{c.name}</p>
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

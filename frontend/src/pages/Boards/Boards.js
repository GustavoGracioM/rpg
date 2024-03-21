import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import CreateBoard from '../../components/boards/CreateBoard';
import verifyToken from '../../utils/verifyToken';
import NavBar from '../../components/navbar/NavBar';
import BoardsList from '../../components/boards/BoardList';
import DarkThema from '../../components/darkThema/DarkThema';

function Boards() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [boardsFriends, setBoardsFriends] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
      api.post('/boards/user', { userId: userInfo.id }).then((r) => setBoards(r.data));
      api.post('/board-user/filter', { userId: userInfo.id, status: 'approved' })
        .then((r) => setBoardsFriends(r.data));
    }).catch(() => navigate('/login'));
  }, []);
  return (
    <DarkThema>
      <NavBar />
      <h1>Boards</h1>
      <CreateBoard user={ user } setBoards={ setBoards } />
      <button type="button" onClick={ () => navigate('/boards/invites') }>
        Invites
      </button>
      <h2>My Boards</h2>
      {boards.map((b) => (<BoardsList
        key={ b.id }
        userId={ user.id }
        board={ b }
        setBoards={ setBoards }
        isDelete
      />))}
      <h2>My Boards Friends</h2>
      {boardsFriends.length >= 1 && boardsFriends
        .map((b) => (<BoardsList
          key={ b.board.id }
          board={ b.board }
          userId={ user.id }
        />))}
    </DarkThema>
  );
}

export default Boards;

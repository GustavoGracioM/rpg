import React, { useEffect, useState } from 'react';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';
import NavBar from '../../components/navbar/NavBar';

function BoardInvites() {
  const [invites, setInvites] = useState([]);
  const [user, setUser] = useState({});

  const reloadInvites = () => {
    api.post('/board-user/filter', { userId: user.id, status: 'pending' })
      .then((r) => setInvites(r.data));
  };

  const updateInvite = (id) => {
    api.put(`/board-user/${id}`, { status: 'approved' })
      .then(() => reloadInvites());
  };
  const delelteInvite = (id) => {
    api.delete(`/board-user/${id}`)
      .then(() => reloadInvites());
  };
  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
      api
        .post('/board-user/filter', { userId: userInfo.id, status: 'pending' })
        .then((r) => setInvites(r.data));
    });
  }, []);
  return (
    <>
      <NavBar />
      <h1>BoardInvites</h1>
      {invites.length <= 0
        ? <p>Não tem Convites</p> : invites.map((i) => (
          <div key={ i.id }>
            <p>{i.board.name}</p>
            <p>{i.user.name}</p>
            <button type="button" onClick={ () => updateInvite(i.id) }>
              Aceitar
            </button>
            <button type="button" onClick={ () => delelteInvite(i.id) }>
              Rejeitar
            </button>
          </div>
        ))}
    </>
  );
}

export default BoardInvites;

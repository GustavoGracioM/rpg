import React, { useEffect, useState } from 'react';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

function InviteFriends() {
  const [invites, setInvites] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    verifyToken().then((userResult) => {
      setUser(userResult);
      api.post('/friends-list/invites', { friendId: userResult.id })
        .then((r) => setInvites(r.data));
    }).catch(() => navigate('/login'));
  }, []);

  const updateInvite = (userId, friendId, status) => {
    api.put('/friends-list', { userId, friendId, status })
      .then(() => api.post('/friends-list/invites', { friendId: user.id })
        .then((r) => setInvites(r.data)));
  };

  return (
    <>
      <h1>InviteFriends</h1>
      {!invites || invites.length <= 0
        ? <p>Não tem convites pendentes</p> : invites.map((i) => (
          <div key={ i.id }>
            <p>{i.user.name}</p>
            <button
              type="button"
              onClick={ () => updateInvite(i.userId, i.friendId, 'approved') }
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={ () => updateInvite(i.userId, i.friendId, 'rejected') }
            >
              Rejeitar
            </button>
          </div>
        ))}
    </>
  );
}

export default InviteFriends;

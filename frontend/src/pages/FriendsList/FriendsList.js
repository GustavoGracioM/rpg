import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';
import NavBar from '../../components/navbar/NavBar';

function FriendsList() {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    verifyToken().then((user) => {
      api.post('/friends-list/my', { userId: user.id }).then((r) => {
        setFriends(r.data);
      }).catch((r) => console.log(r.response.data));
    }).catch(() => navigate('/login'));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Friends</h1>
      <button
        type="button"
        onClick={ () => navigate('/invites') }
      >
        Invites
      </button>
      {friends.map((f) => <p key={ f.id }>{f.name}</p>)}
    </>
  );
}

export default FriendsList;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

function IniviteFriendsBoard() {
  const navigate = useNavigate();
  const params = useParams();
  const [frineds, setFriends] = useState([]);
  const [isMyBoard, setIsMyBoard] = useState(false);
  const [isAddFriend, setIsAddFriend] = useState(false);

  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.get(`/boards/${params.id}`)
        .then((r) => setIsMyBoard(r.data.userId === userInfo.id));
      api
        .post('/board-user/check-approved', { boardId: params.id, userId: userInfo.id })
        .then((f) => {
          setFriends(f.data);
        })
        .catch(() => {});
    }).catch(() => navigate('/login'));
  }, []);
  const invinteFriends = () => {
    setIsAddFriend(!isAddFriend);
  };
  const onSubmit = (data, event) => {
    api.post('/board-user', { userId: data.id, boardId: params.id })
      .then(() => {}).catch((r) => console.log(r));
    event.currentTarget.disabled = true;
  };
  return (
    <>
      {isMyBoard && (
        <button onClick={ invinteFriends } type="button">Adicionar Amigos</button>)}
      {(isAddFriend && frineds.length >= 1) && frineds.map((f) => (
        <div key={ f.id }>
          <p>{f.name}</p>
          <button
            type="submit"
            onClick={ (event) => onSubmit(f, event) }
          >
            Convidar
          </button>
        </div>
      ))}
    </>

  );
}

export default IniviteFriendsBoard;

// .forEach((f) => api
// .post('/board-user/check-approved', { boardId: params.id, userId: f.id })
// .then((r) => console.log(r.data)).catch(() => console.log('não tem amigos')));

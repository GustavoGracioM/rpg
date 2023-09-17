import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

function BoardHistory() {
  const params = useParams();
  const { boardId } = params;
  const [history, setHistory] = useState([]);
  useEffect(() => {
    verifyToken().then((userInfo) => {
      api.post('/character/user', { id: userInfo.id });
      api.post('history-roll/board', { boardId }).then((r) => setHistory(r.data));
    }).catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>BoardHistory</h1>
      {history.map((h) => (
        <div key={ h.id }>
          <p>
            Personagem:
            {' '}
            {h.character.name}
          </p>
          <p>
            Mensagem:
            {' '}
            {h.returnMessage}
          </p>
          <p>
            Valor Total:
            {' '}
            {h.amount}
          </p>
        </div>
      )) }
    </>
  );
}

export default BoardHistory;

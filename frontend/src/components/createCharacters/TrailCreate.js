import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import verifyToken from '../../utils/verifyToken';
import api from '../../service/api';

const setValue = (event, setTrailId) => {
  const id = event.target.value;
  setTrailId(id);
};

const t = ({ e, setClassId, setTrailId, setTrail }) => {
  const id = e.target.value;
  setClassId(id);
  api.get(`/trail/${id}`).then((r) => {
    setTrailId(r.data[0].id);
    setTrail(r.data);
  }).catch(() => setTrail([]));
};

function TrailCreate(prop) {
  const navigate = useNavigate();
  const { trailId, setTrailId, classId, setClassId } = prop;
  const [trail, setTrail] = useState([]);
  const [characterClass, setCharacterClass] = useState([]);
  useEffect(() => {
    verifyToken().then(() => {
      api.get('/class').then((response) => {
        setCharacterClass(response.data);
        setClassId(response.data[0].id);
        api.get(`/trail/${response.data[0].id}`).then((r) => {
          setTrail(r.data);
          setTrailId(r.data[0].id);
        });
      });
    }).catch(() => navigate('/login'));
  }, []);

  const sets = { setClassId, setTrailId, setTrail };
  return (
    <>
      <p>Classe:</p>
      <select value={ classId } onChange={ (e) => t({ e, ...sets }) }>
        {characterClass.map((c) => <option key={ c.id } value={ c.id }>{c.type}</option>)}
      </select>
      {trail.length > 1 && (
        <>
          <p>Trilha:</p>
          <select value={ trailId } onChange={ (e) => setValue(e, setTrailId) }>
            {trail.map((o) => <option key={ o.id } value={ o.id }>{o.name}</option>)}
          </select>
        </>
      )}
    </>
  );
}

export default TrailCreate;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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
    <FormControl variant="standard" sx={ { m: 1, minWidth: 120 } }>
      <InputLabel htmlFor="class" id="class">Classe</InputLabel>
      <Select value={ classId } id="class" onChange={ (e) => t({ e, ...sets }) }>
        {characterClass.map((c) => (
          <MenuItem
            key={ c.id }
            value={ c.id }
          >
            {c.type}
          </MenuItem>
        ))}
      </Select>
      {trail.length > 1 && (
        <FormControl variant="standard" sx={ { m: 1, minWidth: 120 } }>
          <InputLabel htmlFor="trail" id="trail">Trilha</InputLabel>
          <Select
            value={ trailId }
            id="trail"
            onChange={ (e) => setValue(e, setTrailId) }
          >
            {trail.map((o) => <MenuItem key={ o.id } value={ o.id }>{o.name}</MenuItem>)}
          </Select>
        </FormControl>
      )}
    </FormControl>
  );
}

export default TrailCreate;

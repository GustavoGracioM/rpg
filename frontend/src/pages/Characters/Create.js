import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../../service/api';
import verifyToken from '../../utils/verifyToken';
import CharacterCreate from '../../components/createCharacters/CharacterCreate';
import AttributesCreate from '../../components/createCharacters/AttributesCreate';
import ExpertiseCreate from '../../components/createCharacters/ExpertiseCreate';

const sapareteInfos = (data, user, skills) => {
  const character = {
    name: data.name,
    userId: user.id,
    healthPoints: data.healthPoints,
    sanity: data.sanity,
    effortPoints: data.effortPoints };
  const attributes = {
    agilidade: data.agilidade,
    forca: data.forca,
    intelecto: data.intelecto,
    presenca: data.presenca,
    vigor: data.vigor };
  const expertise = {};
  skills.map((s) => data[s.name] && (expertise[s.name] = data[s.name]));
  return { character, attributes, expertise };
};

function CreateCharacter() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [characterClass, setCharacterClass] = useState([]);
  const [skills, setSkills] = useState([]);
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser({ id: userInfo.id });
      api.get('/class').then((response) => setCharacterClass(response.data));
      api.get('/skills').then((response) => setSkills(response.data));
    }).catch(() => navigate('/login'));
  }, []);

  const onSubmit = async (data) => {
    const { character, attributes, expertise } = sapareteInfos(data, user, skills);
    api.post('/character', character).then((response) => {
      const characterId = response.data.id;
      const classId = data.classId === '' ? '1' : data.classId;
      api.post('/class/add', { characterId, classId });
      api.post('/attributes', { characterId, ...attributes });
      api.post('/expertise', { characterId, ...expertise }).then(() => {
        navigate(`/character/${characterId}`);
      });
    }).catch((err) => console.log(err));
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <CharacterCreate characterClass={ characterClass } register={ register } />
      <AttributesCreate register={ register } />
      <ExpertiseCreate skills={ skills } register={ register } />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default CreateCharacter;

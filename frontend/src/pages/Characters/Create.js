import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import verifyToken from '../../utils/verifyToken';
import CharacterCreate from '../../components/createCharacters/CharacterCreate';
import AttributesCreate from '../../components/createCharacters/AttributesCreate';
import NavBar from '../../components/navbar/NavBar';
import OriginsCreate from '../../components/createCharacters/OriginsCreate';
import TrailCreate from '../../components/createCharacters/TrailCreate';
import api from '../../service/api';
import { setClassStates } from '../../utils/utils';

const findCLass = (classId, classInfo, attributes) => {
  const [presenca, vigor] = [
    parseInt(attributes.presenca, 10), parseInt(attributes.vigor, 10)];
  const classSelected = classInfo.find((c) => c.id === parseInt(classId, 10));
  const result = setClassStates(presenca, vigor)[classSelected.type];
  return result;
};

const separateInfos = (data, user) => {
  const character = {
    name: data.name,
    userId: user.id,
  };
  const attributes = {
    agilidade: data.agilidade,
    forca: data.forca,
    intelecto: data.intelecto,
    presenca: data.presenca,
    vigor: data.vigor };
  return { character, attributes };
};

const createExpertise = (characterId, expertisesIds, navigate) => {
  api.post(
    '/expertise-character',
    { characterId, expertisesIds },
  ).then(() => navigate(`/character/${characterId}`));
};

function CreateCharacter() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [trailId, setTrailId] = useState();
  const [classId, setClassId] = useState();
  const [originId, setOriginId] = useState();
  const [classInfo, setClassInfo] = useState([]);
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser({ id: userInfo.id });
      api.get('/class').then((r) => setClassInfo(r.data));
    })
      .catch(() => navigate('/login'));
  }, []);
  const onSubmit = async (data) => {
    const { character, attributes } = separateInfos(data, user);
    const statusPoints = findCLass(classId, classInfo, attributes);
    api.post('/character', { ...character, ...statusPoints, originId, trailId })
      .then((response) => {
        const characterId = response.data.id;
        const [addClass, addAttributes, addOrigins] = [
          api.post('/class/add', { characterId, classId }),
          api.post('/attributes', { characterId, ...attributes }),
          api.get(`/origin/${originId}`)];
        Promise.all([addClass, addAttributes, addOrigins]).then((r) => {
          createExpertise(characterId, r[2].data.expertisesIds, navigate);
        }).catch((err) => console.log(err));
      }).catch((err) => console.log(err));
  };
  return (
    <>
      <NavBar />
      <form onSubmit={ handleSubmit(onSubmit) }>
        <CharacterCreate register={ register } />
        <TrailCreate
          trailId={ trailId }
          setTrailId={ setTrailId }
          classId={ classId }
          setClassId={ setClassId }
        />
        <OriginsCreate originId={ originId } setOriginId={ setOriginId } />
        <AttributesCreate register={ register } />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default CreateCharacter;

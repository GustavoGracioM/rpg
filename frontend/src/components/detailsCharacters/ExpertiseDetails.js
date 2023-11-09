import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';
import { upperCase, degreeTypes } from '../../utils/utils';
import ButtonRotate from '../buttons/ButtonRotate';

const templateExpetise = (values, findExpertise, findTraining) => (
  { id: values.id,
    name: findExpertise.name,
    grade: findTraining.type,
    bonus: findTraining.bonus,
    trainingId: findTraining.id,
  }
);

const oneLess = -1;

const resultSort = (a, b) => {
  if (a.name < b.name) { return oneLess; }
  if (a.name > b.name) { return 1; }
  return 0;
};

const getExpertise = (id, setTraining, setExpertise) => {
  const [apiExpetise, apiTrainig] = [api.get('/expertise'), api.get('/training')];
  Promise.all([apiExpetise, apiTrainig]).then((response) => {
    const [resultExpertise, resultTraining] = [response[0].data, response[1].data];
    api.get(`/expertise-character/${id}`).then((ec) => {
      setTraining(resultTraining);
      const expertiseCharacter = ec.data.map((values) => {
        const findExpertise = resultExpertise.find((e) => e.id === values.expertiseId);
        const findTraining = resultTraining.find((tt) => tt.id === values.trainingId);
        return templateExpetise(values, findExpertise, findTraining);
      });
      setExpertise(expertiseCharacter);
    }).catch((err) => console.log(err));
  });
};

function ExpertiseDetails(prop) {
  const params = useParams();
  const id = params.id ? params.id : params.characterId;
  const { attributes } = prop;
  const [expertise, setExpertise] = useState([]);
  const [training, setTraining] = useState([]);

  useEffect(() => getExpertise(id, setTraining, setExpertise), []);

  const more = (data) => {
    const trainingSelected = training.find((t) => t.id === data.trainingId);
    const nextDegreeName = degreeTypes.indexOf(trainingSelected.type) + 1;
    const nextDegree = training.find((t) => t.type === degreeTypes[nextDegreeName]);
    if (nextDegree) {
      api.put(`/expertise-character/${data.id}`, { trainingId: nextDegree.id })
        .then(() => getExpertise(id, setTraining, setExpertise));
    }
  };

  const less = (data) => {
    const trainingSelected = training.find((t) => t.id === data.trainingId);
    const nextDegreeName = degreeTypes.indexOf(trainingSelected.type) - 1;
    const nextDegree = training.find((t) => t.type === degreeTypes[nextDegreeName]);
    if (nextDegree) {
      api.put(`/expertise-character/${data.id}`, { trainingId: nextDegree.id })
        .then(() => getExpertise(id, setTraining, setExpertise));
    }
  };

  return (
    <>
      <h2>Pericias</h2>
      {expertise.length >= 1 && expertise.sort(resultSort).map((e) => (
        <div key={ e.id }>
          <p>{`${upperCase(e.name)}: ${upperCase(e.grade)} ${e.bonus}`}</p>
          <button type="button" onClick={ () => more(e) }>+</button>
          <button type="button" onClick={ () => less(e) }>-</button>
          <ButtonRotate
            expertise={ { bonus: e.bonus, name: e.name, attributes } }
          />
        </div>
      ))}
    </>
  );
}

export default ExpertiseDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

function Ritual(prop) {
  const params = useParams();
  const id = params.id ? params.id : params.characterId;
  const { rituals, getRituals, setRituals } = prop;
  const deleteRitual = (idRitual) => {
    console.log(idRitual);
    api.delete(`/ritual/${idRitual}`)
      .then(() => getRituals(id, setRituals));
  };

  return rituals.length < 1 ? <p>Não tem rituais</p> : rituals.map((ritual) => (
    <div key={ ritual.id }>
      <p>{`Nome: ${ritual.name}`}</p>
      <p>{`Elementos: ${ritual.type.map((t) => ` ${t}`)}`}</p>
      <p>{`${ritual.circle} Circulo`}</p>
      <p>{ritual.execution}</p>
      <p>{ritual.reach}</p>
      <p>{ritual.target}</p>
      <p>{ritual.duration}</p>
      <p>{ritual.resistance}</p>
      <button type="button" onClick={ () => deleteRitual(ritual.id) }>Deletar</button>
    </div>
  ));
}

export default Ritual;

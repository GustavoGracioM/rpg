import React from 'react';
import { useNavigate } from 'react-router';
import api from '../service/api';

function CharactersAll(prop) {
  const navigate = useNavigate();
  const { characters, setCharacters } = prop;
  const deleteCharacter = (id) => {
    const character = characters.find((c) => c.id === id);
    api
      .delete(`character/${id}`)
      .then(() => api
        .post('/character/user', { id: character.userId })
        .then((response) => setCharacters(response.data)));
  };

  if (!characters || characters.length < 1) return <p>Não tem persnagens</p>;
  return characters.map((c) => (
    <div className="card" key={ c.id }>
      <p>{`Nome: ${c.name}`}</p>
      <p>{`Vida: ${c.healthPoints}`}</p>
      <p>{`Sanidade: ${c.sanity}`}</p>
      <p>{`PE: ${c.effortPoints}`}</p>
      <button
        type="button"
        onClick={ () => navigate(`/character/${c.id}`) }
      >
        Detalhes
      </button>
      <button
        type="button"
        onClick={ () => deleteCharacter(c.id) }
      >
        Deletar
      </button>
    </div>));
}

export default CharactersAll;

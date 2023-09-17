import React from 'react';
import { useParams } from 'react-router-dom';
import Character from '../Characters/Character';

function BoardCharacter() {
  const params = useParams();
  console.log(params.characterId, params.boardId);
  return (
    <>
      <h1>BoardCharacter</h1>
      <Character />
    </>
  );
}

export default BoardCharacter;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Users/Login';
import Characters from './pages/Characters/Characters';
import Create from './pages/Characters/Create';
import Character from './pages/Characters/Character';
import Register from './pages/Users/Register';
import Boards from './pages/Boards/Boards';
import Board from './pages/Boards/Board';
import BoardCharacter from './pages/Boards/BoardCharacters';
import BoardHistory from './pages/Boards/BoardHistory';
function App() {
  return (
    <Routes>
      <Route index element={ <Navigate to="/character" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="character/:id" element={ <Character /> } />
      <Route path="character" element={ <Characters /> } />
      <Route path="character/create" element={ <Create /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="boards" element={ <Boards /> } />
      <Route path="boards/:id" element={ <Board /> } />
      <Route
        path="boards/:boardId/character/:characterId"
        element={ <BoardCharacter /> }
      />
      <Route
        path="board-history/:boardId"
        element={ <BoardHistory /> }
      />
    </Routes>
  );
}

export default App;

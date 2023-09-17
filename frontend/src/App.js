import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Users/Login';
import Characters from './pages/Characters/Characters';
import Create from './pages/Characters/Create';
import Character from './pages/Characters/Character';
import Register from './pages/Users/Register';
function App() {
  return (
    <Routes>
      <Route index element={ <Navigate to="/character" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="character/:id" element={ <Character /> } />
      <Route path="character" element={ <Characters /> } />
      <Route path="character/create" element={ <Create /> } />
      <Route path="register" element={ <Register /> } />
    </Routes>
  );
}

export default App;

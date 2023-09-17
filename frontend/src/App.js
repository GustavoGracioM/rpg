import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Users/Login';
import Register from './pages/Users/Register';
function App() {
  return (
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import React from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Home from "../Home/Home";
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;

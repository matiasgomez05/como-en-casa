import React from 'react';
import Navbar from './components/Navbar';
import QuienesSomos from './components/QuienesSomos';
import QueOfrecemos from './components/QueOfrecemos';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <QuienesSomos />
        <QueOfrecemos />
        <Contacto />
      </div>
  );
}

export default App;
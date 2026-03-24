import { useState } from 'react';
import AutoCard from './components/AutorCard/AutoCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <AutoCard 
        titulo="React"
        explicacao="React é uma biblioteca JavaScript para criar interfaces de usuário."
        exemploC="const element = <h1>Hello, world!</h1>;"
        dica="Comece com o tutorial oficial do React."
      />
    </div>
  )
}

export default App
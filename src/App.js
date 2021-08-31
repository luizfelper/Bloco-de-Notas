import React from 'react';
import ListaDeNotas from './components/listaDeNotas'

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </>
  );
}

export default App;

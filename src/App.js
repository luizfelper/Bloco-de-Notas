import React, {Component} from 'react';
import ListaDeNotas from './components/listaDeNotas';
import FormularioCadastro from './components/FormularioCadastro'

class App extends Component {
  render() {
    return (
    <>
      <FormularioCadastro />
      <ListaDeNotas />
    </>
  );
}}
 

export default App;

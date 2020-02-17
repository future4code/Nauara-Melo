import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: '',
      email: '',
      escolaridade: '',
    }
  }

  render() {
    return(
      <div>
        <Etapa1></Etapa1>
      </div>
    )
  }

}

export default App;

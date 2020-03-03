import React, {Component} from 'react';
import './App.css';
import CadastraAtividade from './Components/CadastraAtividades';
import ListaAtividade from './Components/ListaAtividades';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atividades: []
    }
  }
    
  adicionarAtividade = (novaAtividade) => {
    const atividadesCopy = [...this.state.atividades]

    atividadesCopy.push(novaAtividade)

    this.setState({
      atividades: atividadesCopy
    })

    const atividadesDoLocalStorage = localStorage.getItem('atividades')

    if (!atividadesDoLocalStorage) {
      localStorage.setItem('atividades', JSON.stringify(atividadesCopy))
    } else {
      const atividadesParse = JSON.parse(atividadesDoLocalStorage)

      atividadesParse.push(novaAtividade)

      localStorage.setItem('atividades', JSON.stringify(atividadesParse))
    }
  }


  render() {
    return (
      <div>
        <CadastraAtividade adicionarAtividade = {this.adicionarAtividade} />
        <ListaAtividade atividades = {this.state.atividades} />
      </div>
    );
  }
}

export default App;

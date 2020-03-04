import React from 'react';
import Cadastrar from './Components/Cadastrar';
import Listar from './Components/Listar';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: "cadastro",
      nomeDoBotao: 'Ir para página de Listagem'
    }
  }

  mudarPagina = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({
        telaAtual: "lista",
        nomeDoBotao: 'Ir para página de Registro'
      })
    } else {
      this.setState({
        telaAtual: "cadastro",
        nomeDoBotao: 'Ir para página de Listagem'
      })
    }
  }
 
  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}> { this.state.nomeDoBotao } </button>
        { this.state.telaAtual === "cadastro" ? (<Cadastrar />) : (<Listar />) }
      </div>
    )
  }
}
  

export default App;
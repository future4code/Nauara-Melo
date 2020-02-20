import React from 'react';

class CadastraAtividade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atividade: ''
    }
  }

  handleOnChangeAtividade = (event) => {
    this.setState({
        atividade: event.target.value
    })
  }

  aoClicarNoBotaoAdicionar = () => {
    if (this.state.atividade !== '') {
      this.props.adicionarAtividade({
        id: Date.now(),
        texto: this.state.atividade,
        completa: false
      })
    } else {
      alert('Favor, preecher o campo!')
    }
  }

  render() {
    return (
      <div>
        <h1> Lista de Tarefas </h1>
        <input onChange={this.handleOnChangeAtividade} value={ this.state.atividade } type="text"/>
        <button onClick={this.aoClicarNoBotaoAdicionar}>Adicionar</button>
      </div>
    );
  }
}

export default CadastraAtividade;

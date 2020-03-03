import React from 'react';
import styled from 'styled-components';

const ItemSublinhado = styled.div`
  text-decoration: line-through;
`

class ListaAtividade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filtro: 'nenhum',
        atividades: []
    }
  }

  componentWillReceiveProps() {
    this.setState({
      atividades: JSON.parse(localStorage.getItem('atividades')) || []
    })
  }

  handleOnChangeFiltro = (event) => {
    this.setState({
        filtro: event.target.value
    })
  }

  listarAtividades = () => {
      const atividades = this.state.filtro === 'nenhum' ? this.state.atividades : this.listarAtividadesComFiltro()

      return atividades.map((value) => {
          if (value.completa) {
            return <ItemSublinhado> <li key={ value.id } id={ value.id } onClick={ () => this.aoClicarNoItem(value.id) }> { value.texto } </li> </ItemSublinhado>
          } else {
            return <li key={ value.id } id={ value.id } onClick={ () => this.aoClicarNoItem(value.id) }> { value.texto } </li>
          }
      })
  }

  listarAtividadesComFiltro = () => {
      return this.state.atividades.filter(value => {
          return this.state.filtro === 'completa' ? value.completa === true : value.completa === false
      })
  }

  componentDidMount() {
    const atividadesLocalStorage = JSON.parse(localStorage.getItem('atividades')) || []

    this.setState({
      atividades: atividadesLocalStorage
    })
  }

  aoClicarNoItem = (atividadeId) => {
    const atividadesCopy = [...this.state.atividades];

    const selectedItemIndex = atividadesCopy.findIndex((atividade) => {
      return atividade.id === atividadeId;
    });

    const selectedAtividade = atividadesCopy[selectedItemIndex]

    selectedAtividade.completa = !selectedAtividade.completa

    this.setState({
      atividades: atividadesCopy
    })

    localStorage.setItem('atividades', JSON.stringify(this.state.atividades))
}

  render() {
    return (
        <div id="filtro">
            <label> Filtro </label>
            <select onChange={this.handleOnChangeFiltro} value={ this.state.filtro }>
                <option value="nenhum"> Nenhum </option>
                <option value="pendente"> Pendentes </option>
                <option value="completa"> Completas </option>
            </select>
            <ul>
                { this.listarAtividades() }
            </ul>
        </div>
    );
  }
}

export default ListaAtividade;
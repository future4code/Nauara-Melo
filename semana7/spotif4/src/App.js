import React, { Component } from 'react';
import CriaPlaylist from './components/criaPlaylist'
import ListaPlaylist from './components/listaPlaylists';
import DetalhaPlaylist from './components/detalhaPlaylist';
import AdicionaMusica from './components/adicionaMusica';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "aside header"
    "aside main "
    "aside footer ";
  grid-template-columns: 35vh auto;
  grid-template-rows: auto 87vh auto;
`
const Aside = styled.aside`
  grid-area: aside;
  background-color: #304156;
  color: whitesmoke;
  font-size: 3vh;
`
const Header = styled.header`
  height: 45px;
  color: white;
  background-color: #C0C0C0;
  text-align:center;
  font-size: 30px;
  grid-area: header;
`
const Footer = styled.footer`
  color: whitesmoke;
  background-color: #C0C0C0;
  text-align:center;
  font-size: 25px;
  grid-area: footer;
  bottom: 0;
`

const Main = styled.main`
  grid-area: main;
  background-color: #F8F8FF;
  overflow: scroll;
`

const UlFormatada = styled.ul`
  list-style: none;
`

const LiStyled = styled.li`
  cursor: pointer;
  margin-top: 2vh;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componenteAtual: <CriaPlaylist />
    }
  }

  aoClicarNoCadastrarPlayList = () => {
    this.setState({
      componenteAtual: <CriaPlaylist />
    })
  }

  aoClicarNoListarPlayList = () => {
    this.setState({
      componenteAtual: <ListaPlaylist renderizaDetalharPlaylist={false} />
    })
  }

  aoClicarNoAdicionarMusicaNaPlayList = () => {
    this.setState({
      componenteAtual: <AdicionaMusica />
    })
  }

  render() {
    return (
      <Container>
        <Header>
          Spotif4
        </Header>
        <Aside>
          <UlFormatada>
            <LiStyled onClick={this.aoClicarNoCadastrarPlayList}> Criar Playlist </LiStyled>
            <LiStyled onClick={this.aoClicarNoListarPlayList}> Listar Playlist </LiStyled>
            <LiStyled onClick={this.aoClicarNoAdicionarMusicaNaPlayList}> Adicionar Música </LiStyled>
          </UlFormatada>
        </Aside>
        <Main>
          { this.state.componenteAtual }
        </Main>
        <Footer>
          @nauaramelo
        </Footer>
      </Container>
    )
  }

}

export default App;
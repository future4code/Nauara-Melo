import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario: '',
      urlFotoPerfil: '',
      urlFotoPost: '',
      listaPosts: []
    }
  }

  handleOnChangeUrlFotoUsuario = (event) => {
    this.setState({
      urlFotoPerfil: event.target.value
    })
  }

  handleOnChangeUrlFotoPost = (event) => {
    this.setState({
      urlFotoPost: event.target.value
    })
  }

  handleOnChangeNomeUsuario = (event) => {
    this.setState({
      usuario: event.target.value
    })
  }

  aoClicarNoBotaoCadastrar = () => {
    const nomeUsuario = this.state.usuario
    const urlFotoUsuario = this.state.urlFotoPerfil
    const urlFotoPost = this.state.urlFotoPost

    if (nomeUsuario === '' || urlFotoUsuario === '' || urlFotoPost === '') {
      alert('Favor, preencher todos os inputs!')
    } else {
      this.adicionarNaListaDePost(nomeUsuario, urlFotoUsuario, urlFotoPost)
  
      this.setState({
        usuario: '',
        urlFotoPerfil: '',
        urlFotoPost: ''
      })
    }
  }

  adicionarNaListaDePost = (nomeUsuario, urlFotoUsuario, urlFotoPost) => {
    const post = {
      nomeUsuario,
      urlFotoUsuario,
      urlFotoPost
    }

    const listaPostCopy = [...this.state.listaPosts]

    listaPostCopy.push(post)
    
    this.setState({
      listaPosts: listaPostCopy
    })

  }

  render() {
    return (
      <div className="App">
          <div>
            <label for="nomeDeUsuario"> Nome do Usuário: </label>
            <input id="nomeDeUsuario" onChange={this.handleOnChangeNomeUsuario} value={this.state.usuario}/>
  
            <label for="fotoPerfil"> URL do Usuário: </label>
            <input id="fotoPerfil" onChange={this.handleOnChangeUrlFotoUsuario} value={this.state.urlFotoPerfil}/>
  
            <label for="fotoPost"> URL do Post: </label>
            <input id="fotoPost" onChange={this.handleOnChangeUrlFotoPost} value={this.state.urlFotoPost}/>

            <button onClick={this.aoClicarNoBotaoCadastrar} > Cadastrar </button>
          </div>

          <Post titulo="nauaramelo" imagem={require('./image/sunset.png')}/>
          {this.state.listaPosts.map(elemento => {
            return (
              <Post titulo={elemento.nomeUsuario} imagem={elemento.urlFotoPost}/>
            )
          })}

      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    border: solid 1px black;
    width: 20%;
    margin: 0 auto;
    padding: 30px;
`

const ButtonStyle = styled.div`
    margin-top: 5px;
    text-align: center;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

const authtoken = "string"

class CadastraUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          nome: ""
        }
    }

    handleOnChangeNome = (event) => {
        this.setState({
            nome: event.target.value 
        })
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value 
        })
    }

    cadastrarUsuario = () => {
        const dadosNovoUsuario = {
            name: this.state.nome,
            email: this.state.email
        }

        const novoUsuarioPromessa = axios.post(
            `${baseUrl}/users/createUser`,
            dadosNovoUsuario,
            {
                headers: {
                    'api-token': authtoken
                }
            }
        )

        novoUsuarioPromessa
        .then(response => {
            alert('Usuário cadastrado com sucesso :)')
            this.limparCampos()
        }).catch(error => {
            alert('Já existe um usuário cadastrado com os dados informados :(')
        })
    }

    limparCampos = () => {
        this.setState({
            email: '',
            nome: ''
        }) 
    }

    render() {
        return (
            <Container>
               <div>
                    <label for="nome"> Nome: </label>
                    <input id="nome" onChange={this.handleOnChangeNome} value={this.state.nome} type="text" name="name"/>
                </div>
                <div>
                    <label for="email"> Email: </label> 
                    <input id="email" onChange={this.handleOnChangeEmail} value={this.state.email} type="text" name="name"/>
                </div>
                <ButtonStyle><button onClick={this.cadastrarUsuario}> Salvar </button></ButtonStyle>
            </Container>
        );
    }

}

export default CadastraUsuario; 
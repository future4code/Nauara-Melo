import React, { Component } from 'react';
import EtapaDois from '../Etapa2/Etapa2';
import EtapaTres from '../Etapa3/Etapa3';

class EtapaUm extends Component{
    constructor (props) {
        super(props)
        this.state = {
            nome: '',
            idade: '',
            email: '',
            escolaridade: 'medioIncompleto',
            componente: null
        }
    }

    handleOnChangeNome = (event) => {
        this.setState({
            nome: event.target.value
        })
    }

    handleOnChangeIdade = (event) => {
        this.setState ({
            idade: event.target.value
        })
    }

    handleOnChangeEmail = (event) => {
        this.setState ({
            email: event.target.value
        })
    }

    handleOnChangeEscolaridade = (event) => {
    
        this.setState ({
            escolaridade: event.target.value
        })
    }

    aoClicarNoBotaoProximaEtapa = () => {
        const nomeUsuario = this.state.nome
        const idadeUsuario = this.state.idade
        const emailUsuario = this.state.email
    
        if (nomeUsuario === '' || idadeUsuario === '' || emailUsuario === '') {
          alert("Você deve preencher todas as perguntas antes de continuar")
        } else {
            const componente = this.state.escolaridade === "superiorIncompleto" || this.state.escolaridade === "superiorCompleto" ? (<EtapaDois/>) : (<EtapaTres/>)

            this.setState({
                componente 
            })
        }
    }

    render() {
        const etapa1 = (
            <div>
                <h3> Etapa 1: Dados Gerais</h3>
                <form>
                    <label for="nome"> 1. Qual o seu nome? </label>
                    <input onChange={this.handleOnChangeNome} value={this.state.nome}/> 
                    <label for="idade"> 2. Qual a sua idade? </label>
                    <input onChange={this.handleOnChangeIdade} value={this.state.idade}/> 
                    <label for="email"> 3. Qual o seu email? </label>
                    <input onChange={this.handleOnChangeEmail} value={this.state.email}/> 
                    <label for="escolaridade"> 4. Qual a sua escolaridade? </label>
                    <select onChange={this.handleOnChangeEscolaridade} value={this.state.escolaridade} > 
                        <option value="medioIncompleto"> Ensino Médio Incompleto </option>
                        <option value="medioCompleto"> Ensino Médio Completo </option>
                        <option value="superiorIncompleto"> Ensino Superior Incompleto </option>
                        <option value="superiorCompleto"> Ensino Superior Completo </option>
                    </select>
                    <button onClick={ this.aoClicarNoBotaoProximaEtapa }> Próxima etapa </button>
                </form>
            </div>)

        return (
            <div>
                { !this.state.componente ? etapa1 : this.state.componente }
            </div>
        )

    }
}

export default EtapaUm;
import React, { Component } from 'react';
import EtapaFim from '../EtapaFim/EtapaFim'

class EtapaDois extends Component{
    constructor (props) {
        super(props)
        this.state = {
            curso: '',
            unidade: '',
        }
    }

    handleOnChangeCurso = (event) => {
        this.setState({
            curso: event.target.value
        })
    }

    handleOnChangeUnidade = (event) => {
        this.setState ({
            unidade: event.target.value
        })
    }

    aoClicarNoBotaoProximaEtapa = () => {
        const cursoUsuario = this.state.curso
        const unidadeUsuario = this.state.idade
    
        if (cursoUsuario === '' || unidadeUsuario === '') {
          alert("Você deve preencher todas as perguntas antes de continuar.")
        } else {
            const componente = (<EtapaFim></EtapaFim>)

            this.setState({
                componente 
            })
        }
    }



    render() {
        const Etapa2 = (
            <div>
                <h3> Etapa 2: Informações do Ensino Superior</h3>
                <form>
                    <label id="curso"> 5. Qual o seu curso? </label>
                    <input onChange={this.handleOnChangeCurso} value={this.state.curso}/>
                    <label id="unidade"> 6. Qual a unidade de Ensino? </label>
                    <input onChange={this.handleOnChangeUnidade} value={this.state.unidade}/>
                    <button onClick={this.aoClicarNoBotaoProximaEtapa}> Próxima Etapa </button>
                </form>
            </div>)

        return ( 
            <div>
                { !this.state.componente ? Etapa2 : this.state.componente }
            </div>
         )
    
    }   
    
    
}

export default EtapaDois;
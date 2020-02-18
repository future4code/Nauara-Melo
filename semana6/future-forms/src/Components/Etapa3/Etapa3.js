import React, { Component } from 'react';
import EtapaFim from '../EtapaFim/EtapaFim'


class EtapaTres extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cursoGraduacao: '',
            cursoComplementar: 'nenhum',  
        }
    }

    handleOnChangeCursoGraduacao = (event) => {
        this.setState({
            cursoGraduacao: event.target.value
        })
    }

    handleOnChangeCursoComplementar = (event) => {
        this.setState ({
            cursoComplementar: event.target.value
        })
    }

    aoClicarNoBotaoProximaEtapa = () => {
        const cursoGraduacaoUsuario = this.state.cursoGraduacao
        const cursoComplementarUsuario = this.state.cursoComplementar
    
        if (cursoGraduacaoUsuario === '' || cursoComplementarUsuario === '') {
          alert("Você deve preencher todas as perguntas antes de continuar.")
        } else {
            const componente = (<EtapaFim></EtapaFim>)

            this.setState({
                componente 
            })
        }
    }

    render() {
        const Etapa3 = (
            <div>
                <h3> Etapa 3: Informações Gerais de Ensino</h3>
                <form>
                    <label id="cursoGraduacao"> 5. Por que você não terminou um curso de graduação? </label>
                    <input onChange={this.handleOnChangeCursoGraduacao} value={this.state.cursoGraduacao}/>
                    <label id="cursoComplementar"> 6. Você fez algum curso complementar? </label>
                    <select onChange={this.handleOnChangeCursoComplementar} value={this.state.cursoComplementar} >
                        <option value="nenhum"> Nenhum </option>
                        <option value="cursoTecnico"> Curso Técnico </option>
                        <option value="cursoIngles"> Curso de Inglês </option>
                    </select>
                    <button onClick={this.aoClicarNoBotaoProximaEtapa}> Próxima Etapa </button>
                </form>
            </div>)

        return (
            <div>
                { !this.state.componente ? Etapa3 : this.state.componente }
            </div>
        )
            
    }
}

export default EtapaTres;
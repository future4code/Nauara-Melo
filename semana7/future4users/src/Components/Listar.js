import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

const authtoken = "string"

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const ListaNaoOrdenada = styled.ul`
    list-style: none;
`

const LiFormatado = styled.li`
    display: flex;
    min-width: 60px;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px 0;
`

const SpanDelete = styled.span`
    color: red;
    cursor: pointer;
    font-weight: bold;
`

class ListarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ListaDeUsuarios: [],
        }
    }

    buscarListaDeUsuarios = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users/getAllUsers`, {
                headers: {
                    'api-token': authtoken
                }
            })

            const ListaDeUsuarios = response.data.result;
            this.setState({ ListaDeUsuarios: ListaDeUsuarios });

        } catch(error) {
            alert('Não foi possível buscar a lista de usuários!')
            this.setState({ ListaDeUsuarios: [] })
        }   
    }

    componentDidMount () {
        this.buscarListaDeUsuarios()
    }

    deletarUsuario = (id) => {
        const deletarUsuarioPromessa = axios.delete(
            `${baseUrl}/users/deleteUser?id=${id}`,
            {
                headers: {
                    'api-token': authtoken
                }
            }
        )

        deletarUsuarioPromessa.then(response => {
            alert('Usuario deletado com sucesso!');
            this.buscarListaDeUsuarios();
        }).catch(error => {
            alert('Por favor, tente novamente!');
        })
    }


    render() {
        return (
            <Container>
                    <div>
                        <ListaNaoOrdenada>
                            <h3>Usuários Cadastrados:</h3>
                         { this.state.ListaDeUsuarios.map(usuario => {
                             return <LiFormatado> {usuario.name} <SpanDelete onClick={ () => this.deletarUsuario(usuario.id) }> X </SpanDelete> </LiFormatado>
                         }) }
                        </ListaNaoOrdenada>
                    </div>
            </Container>
        );
    }

}

export default ListarUsuario; 
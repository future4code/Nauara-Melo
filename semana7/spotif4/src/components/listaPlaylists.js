import React, { Component } from  'react';
import axios from  'axios';
import DetalhaPlaylist from './detalhaPlaylist';
import styled from 'styled-components';

const Container = styled.div`
`

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
`

const ColumnButtons = styled.div`
    display: grid;
    grid-template-columns: 10vh 10vh;
    grid-gap: 2px;
    justify-content: center;
`

const Button = styled.button`
    background-color: ${props => props.eBotaoApagar ? '##fef0f0' : '#ecf5ff'};
    color: ${props => props.eBotaoApagar ? '#f56c6c' : '#409eff'};
    border-radius: 4px;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid #d9ecff;
`

const ColumnsNameGrid = styled.div`
    font-weight: bold;
    text-align: center;
`

const RowsGrid = styled.div`
    text-align: center;
`


const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api/playlists"

class ListaPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDePlaylists: [],
            renderizaDetalharPlaylist: false,
            playlistSelecionada: {}
        }
    }

    buscarListaDePlaylists = async () => {
        try {
            const response = await axios.get(`${baseUrl}/getAllPlaylists` , 
            {
                headers: {
                    auth: 'string'
                }
            })

            const listaDePlaylists = response.data.result.list;

            this.setState({ listaDePlaylists })

        } catch(error) {
            alert('Não foi possível carregar as suas playlists')
        }
    }

    componentDidMount () {
        this.buscarListaDePlaylists()
    }

    apagarPlaylist = (id) => {
        const apagarPlaylistPromessa = axios.delete(`${baseUrl}/deletePlaylist?playlistId=${id}`, 
        {
            headers: {
                auth: 'string'
            }
        })

        apagarPlaylistPromessa.then(response => {
            alert('Playlist apagada com sucesso!');
            this.buscarListaDePlaylists();
        }).catch(error => {
            alert('Alguma coisa')
        })
    }

    detalharPlaylist = (playlist) => {
        this.setState({
            renderizaDetalharPlaylist: !this.state.renderizaDetalharPlaylist,
            playlistSelecionada: playlist
        })
    }

    render() {
        const ListaPlaylist = (
            <Container>
                <ContainerGrid>
                    <ColumnsNameGrid> Nome da playlist </ColumnsNameGrid>
                    <ColumnsNameGrid> Ações </ColumnsNameGrid>
                </ContainerGrid>
                { this.state.listaDePlaylists.map(playlist => {
                    return (
                    <ContainerGrid>
                        <RowsGrid>{playlist.name}</RowsGrid>
                        <ColumnButtons>
                            <Button eBotaoApagar={true} onClick={ () => this.apagarPlaylist(playlist.id) }> Apagar  </Button>
                            <Button eBotaoApagar={false} onClick={ () => this.detalharPlaylist(playlist) }> Detalhar </Button>    
                        </ColumnButtons>
                    </ContainerGrid>
                )}) }
            </Container>
        )

        return (
            <div>
                { this.state.renderizaDetalharPlaylist ? <DetalhaPlaylist playlist = {this.state.playlistSelecionada} /> : ListaPlaylist }
            </div>
        )
    }
}

export default ListaPlaylist;
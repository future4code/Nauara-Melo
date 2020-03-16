import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api/playlists"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    grid-area: card;
    margin: 15px auto;
    width: 350px;
    height: 350px;
    border: solid black 1pt; 
    background-color: #304156;
    border-radius: 1vh;
    color: white;
`

const Titulo = styled.h1`
    font-size: 5vh;
`

const TituloContainer = styled.div`
    text-align: center;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
    text-align: left;
    padding-bottom: 1vh;
`

const InputStyle = styled.input`
    width: 300px;
`

const SelectStyle = styled.select`
    width: 300px;
    margin-bottom: 2px;
`

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 35vh;
    left: 118vh;
`

class AdicionaMusica extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistId: '',
            name: '',
            artist: '',
            url: '',
            playlists: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`${baseUrl}/getAllPlaylists` , 
            {
                headers: {
                    auth: 'string'
                }
            })

            const listaDePlaylists = response.data.result.list;

            this.setState({ playlists: listaDePlaylists })

        } catch(error) {
            alert('Não foi possível carregar as suas playlists')
        }
    }

    handleOnChangePlaylist = (event) => {
        this.setState({
            playlistId: event.target.value
        })
    }

    handleOnChangeNomeDaMusica = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeArtista = (event) => {
        this.setState({
            artist: event.target.value
        })
    }

    handleOnChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    adicionarMusicaNaPlaylist = async () => {
        const object = {
            playlistId: this.state.playlistId,
            music: {
                name: this.state.name,
                artist: this.state.artist,
                url: this.state.url
            }
        }

        try {
            const response = await axios.put(
                `${baseUrl}/addMusicToPlaylist`,
                object,
                {
                    headers: {
                        auth: 'string'
                    }
                }
            )
            alert('Musica cadastrada com sucesso')
            this.limparCampos()
        } catch (error) {
            alert('Deu erro!')
        }
    }

    limparCampos = () => {
        this.setState({
            name: '',
            artist: '',
            url: '',
        }) 
    }

    render() {
        return (
            <Container>
                <Card>
                    <TituloContainer>
                        <Titulo> Adicione suas músicas na playlist! </Titulo>
                    </TituloContainer>
                    <FormContainer>
                        <Label for="playlist"> Informe a playlist </Label>
                        <SelectStyle onChange={this.handleOnChangePlaylist} value={this.state.playlist} >
                            { this.state.playlists.map(playlist => {
                                return <option value={playlist.id}> {playlist.name} </option>
                            }) }

                        </SelectStyle>
                        <Label for="nome"> Informe o nome da música </Label>
                        <InputStyle id="nome"onChange={this.handleOnChangeNomeDaMusica} value={this.state.name} type="texto"></InputStyle>
                        <Label for="artist"> Informe o nome do artista </Label>
                        <InputStyle id="artist" onChange={this.handleOnChangeArtista} value={this.state.artist} type="texto"></InputStyle>
                        <Label for="url"> Informe o link da música </Label>
                        <InputStyle id="url" onChange={this.handleOnChangeUrl} value={this.state.url} type="texto"></InputStyle>
                    </FormContainer>
                    <ButtonContainer>
                        <button onClick={this.adicionarMusicaNaPlaylist}>Salvar</button>
                    </ButtonContainer>
                </Card>
            </Container>
        )
    }
}

export default AdicionaMusica;
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
`
const BoxCard = styled.div`
`
const Titulo = styled.h1`
    font-size: 5vh;
    text-align: center; 
`
const MiniCard = styled.div`
    grid-area: card;
    margin: 15px auto;
    width: 350px;
    height: 140px;
    border: solid black 1pt; 
    background-color: #304156;
    color: white;
    border-radius: 1vh;
`
const SpanStyled = styled.span`
    font-size: 3vh;
    font-weight: bold;
`

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api/playlists"

class DetalhaPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: {
                musics: []
            }
        }
    }

    detalharPlaylist = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}/getPlaylistMusics/${this.props.playlist.id}`,
                {
                    headers: {
                        auth: 'string'
                    }
                }
            )

            const playlist = this.props.playlist

            playlist.musics = response.data.result.musics

            this.setState({
                playlist
            })
        } catch (error) {

        }
    }

    componentDidMount() {
        this.detalharPlaylist()
    }

    render() {
        return (
            <Container>
                <BoxCard>
                    <Titulo> Detalhar </Titulo>
                    <SpanStyled > Nome da Playlist: {this.state.playlist.name} </SpanStyled>
                    {this.state.playlist.musics.map(music => {
                        return (
                            <MiniCard> 
                                <p> Nome da Música: {music.name} </p>
                                <p> Nome do Artista: {music.artist} </p>
                                <audio src={ music.url } controls> </audio>
                            </MiniCard>
                        )
                    })

                    }
                </BoxCard>
            </Container>
        )
    }
}

export default DetalhaPlaylist;
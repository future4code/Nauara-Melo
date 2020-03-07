import React from  'react';
import axios from  'axios';
import styled from 'styled-components'; 

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

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

const ButtonContainer = styled.div`
/*     border-radius: 90%;
    border: none;
    position: absolute;
    bottom: 30vh;
    left: 7vh;
    width: 50vw;
    height: 10vh; */

    position: absolute;
    bottom: 35vh;
    left: 118vh;
`

const ButtonStyled = styled.div`
    
`

class CriaPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        }
    }
    

    handleOnChangeNome = (event) => {
        this.setState ({
            nome: event.target.value
        })
    }

    criarPlaylist = () => {
        const novaPlaylist = {
            name: this.state.nome,
        }

        const novaPlaylistPromessa = axios.post(
            `${baseUrl}/playlists/createPlaylist` ,
            novaPlaylist,
            {
                headers: {
                    auth: 'string'
                }
            }
        )

        novaPlaylistPromessa
        .then(response => {
            alert('Playlist criada com sucesso!')
            this.limparCampos()
        }) .catch( error => {
            alert('Já existe uma playlist com os dados informados.')
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
                <Card>
                    <TituloContainer>
                        <Titulo> Crie a sua playlist! </Titulo>
                    </TituloContainer>
                    <FormContainer>
                        <Label for="nome"> Qual nome você deseja para a sua playlist? </Label>
                        <InputStyle id="nome" onChange={this.handleOnChangeNome} value={this.state.nome} type="texto"></InputStyle>
                    </FormContainer>
                    <ButtonContainer>
                        <ButtonStyled>
                            <button onClick={this.criarPlaylist}>Salvar</button>
                        </ButtonStyled>
                    </ButtonContainer>
                </Card>
            </Container>
        )
    }
}

export default CriaPlaylist;
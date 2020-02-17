import React from 'react';
import './Post.css';
import favorite_white from '../../image/favorite-white.svg';
import favorite_checked from '../../image/favorite.svg';
import comment_icon from '../../image/comment_icon.svg';
import styled from 'styled-components';

const PostContainer = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 10px 0;
`

const PostImage = styled.img`
    width: 100%;
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between
`


class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: props.titulo,
            imagem: props.imagem,
            favorite: favorite_white,
            comment: comment_icon,
            mostrandoFavoritoPreenchido: false,
            mostrandoInputComentario: false,
            contadorComentario: 0,
            contadorFavorito: 0
        }
    }

    aoClicarNoFavorito = () => {

        if (!this.state.mostrandoFavoritoPreenchido) {
            this.setState({
                favorite: favorite_checked,
                mostrandoFavoritoPreenchido: true,
                contadorFavorito: 1
            })
        } else { 
            this.setState ({
                favorite: favorite_white,
                mostrandoFavoritoPreenchido: false,
                contadorFavorito: 0
            })
        }
    } 

    aoClicarNoBotaoComentario = () => {

        if (!this.state.mostrandoInputComentario) {
            this.setState({
                mostrandoInputComentario: true
            })
        } else {
            this.setState({
                mostrandoInputComentario: false
            })
        }
    }

    aoClicarNoBotaoComentar = () => {
        this.setState({
            mostrandoInputComentario: false,
            contadorComentario: this.state.contadorComentario + 1
        })
    }

    renderInput = () => {
        if (this.state.mostrandoInputComentario) {
            return (
                <div>
                    <input placeholder="Escreva seu comentário"/>
                    <button onClick={ this.aoClicarNoBotaoComentar }> Comentar </button>
                </div>
            )
        }
    }

    render () {
        return(
            <div>
                <PostContainer>
                    <h4> {this.state.titulo} </h4> 
                    <PostImage src={this.state.imagem} />
                    <Botoes>
                        <div>
                            <img src={ this.state.favorite} onClick={ this.aoClicarNoFavorito }/>
                            <span> {this.state.contadorFavorito} </span>
                        </div>
                        <div>
                            <img src={ this.state.comment} onClick={ this.aoClicarNoBotaoComentario }/>
                            <span> {this.state.contadorComentario} </span>
                        </div>
                    </Botoes>
                    { this.renderInput() }

                </PostContainer>
            </div>
        )   
    } 

}

export default Post
import React from 'react'
import './ImageButton.css'

function ImageButton(props) {
    return(
        <div className="image-button">
            <button>
                <img src={ props.imagem }/>
                <spain>{ props.texto }</spain>
            </button>
        </div>
    )
}

export default ImageButton
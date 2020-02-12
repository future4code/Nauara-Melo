import React from 'react'
import './BigCard.css'

function BigCard(props) {
    return(
        <div className="big-card">
            <img src={ props.imagem }/>
            <h4>{ props.titulo }</h4>
            <p>{ props.texto }</p>
        </div>
    )
}

export default BigCard
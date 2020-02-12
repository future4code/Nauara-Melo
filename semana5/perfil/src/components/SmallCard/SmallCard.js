import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
    return(
        <div className="small-card">
            <img src={ props.imagem }/>
            <div className="texto">
                <label> { props.label } </label> 
                <spain>{ props.texto }</spain>
            </div>

        </div>
    )
}

export default SmallCard
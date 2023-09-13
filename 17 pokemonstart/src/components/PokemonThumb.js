import React from 'react'

const PokemonThumb = ({ id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img className='image' src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className='name'>{name}</h3>
                <span>Type: {type}</span>
            </div>
        </div>
    )
}

export default PokemonThumb
// Composant Card - sur la page d'Accueil
import './card.css';
import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

// On donne les types requis pour le composant 
// [titre] -> string -> obligatoire
// [cover] -> string -> obligatoire
// [id] -> string -> obligatoire
Card.propTypes = {
    title : propTypes.string.isRequired,
    cover : propTypes.string.isRequired,
    id : propTypes.string.isRequired,
}

// Titre par défaut s'il n'y a pas de titre dans les data
Card.defaultProps = {
    title: 'Oups... le titre ne s\'affiche pas !',
}

function Card({cover, title, id}) {
    return(
        <Link to={'/rental/' + id} className='card' data-id={id} >
            <div className='cardBackground'></div>
            <img className='cardCover' src={cover} alt={`${title} cover`} />
            <span className='cardTitle'>{title}</span>
        </Link>
    )
}

export default Card
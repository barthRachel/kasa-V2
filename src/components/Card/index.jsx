import './card.css';
import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

Card.propTypes = {
    title : propTypes.string.isRequired,
    cover : propTypes.string.isRequired,
    id : propTypes.string.isRequired,
}

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
import './error.css';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/404.png';

function Error() {

    document.title = "Kasa | Error 404";

    return(
        <main className='mainError'>
            <div className='errorContainer primary'>
                <img src={error} alt='Error 404 !'/>

                <h1>Oups ! La page que vous demandez n'existe pas.</h1>

                <Link to="/" className='primary'>Retourner sur la page d'accueil.</Link>
            </div>
        </main>
    )
}

export default Error
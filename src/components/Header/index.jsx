// Composant Header pour toutes les pages
import './header.css';
import { Link } from 'react-router-dom';
import React, { useState }  from 'react';
import logo from '../../assets/kasa_header.png';



function Header() {
    // Création d'une liste avec les deux url pour gérer l'action du header
    const urls = ["/", "/about"]
    // Création du hook pour gérer l'action du header
    const [inWhichUrl, setUrl] = useState(urls[0]);

    // Fonction pour changer l'URL à la page d'accueil
    const changeIsHome = () => {
        setUrl(urls[0]);
    }

    // Fonction pour changer l'URL à la page à propos
    const changeIsAbout = () => {
        setUrl(urls[1]);
    }

    return (
        <header>
            <div className='headerContainer'>
                <Link to="/" onClick={changeIsHome}>
                    <img src={logo} alt="Logo Kasa" />
                </Link>
                <nav>
                    <Link to="/" className={(inWhichUrl === "/" ? "navigationOn" : "navigationLink") + " primary"} onClick={changeIsHome} /*className='navigationLink primary'*/>Accueil</Link>
                    <Link to="/about" className={(inWhichUrl === "/about" ? "navigationOn" : "navigationLink") + " primary"} onClick={changeIsAbout} /*className='navigationLink primary'*/>A Propos</Link>
                </nav>

            </div>
        </header>

    )
}

export default Header
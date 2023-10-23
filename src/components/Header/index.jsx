import './header.css';
import { Link } from 'react-router-dom';
import React, { useState }  from 'react';
import logo from '../../assets/kasa_header.png';



function Header() {

    const urls = ["/", "/about"]
    const [inWhichUrl, setUrl] = useState(urls[0]);

    const changeIsHome = () => {
        setUrl(urls[0]);
    }

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
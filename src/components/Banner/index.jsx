// Composant Banner - sur la page d'Accueil et la page A Propos
import './banner.css';
import backHome from '../../assets/back_homepage.png';
import backAbout from '../../assets/back_about.png';

function Banner({wichPage}) {
    // On regarde sur quelle page on est pour choisir l'image à mettre dans la bannière
    let pathImg = (wichPage === "Home" ? backHome : backAbout);
    // On regarde sur quelle page on est pour savoir quel titre mettre
    let title = (wichPage === "Home" ? "Chez vous, partout et ailleurs" : "");

    return(
        <aside className='asideBanner'>
            <div className='bannerContainer'>
                <img src={pathImg} alt='Paysage représentant une côte'/>
                <h1>{title}</h1>
            </div>
        </aside>
    )
}

export default Banner;
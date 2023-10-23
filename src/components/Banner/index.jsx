import './banner.css';
import backHome from '../../assets/back_homepage.png';
import backAbout from '../../assets/back_about.png';

function Banner({wichPage}) {
    let pathImg = (wichPage === "Home" ? backHome : backAbout);
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
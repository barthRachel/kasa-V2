// Page A Propos
import '../css/About.css';
import Banner from '../components/Banner';
import values from '../data/about.json';
import Collapse from '../components/Collapse';

function About() {
    // On change le titre de l'onglet
    document.title = "Kasa | A Propos";
    
    return(
        <main className='mainAbout'>
        <Banner wichPage="About" />

        <div className='mainAboutContainer'>
            {values.map((infos, index) => (
                <Collapse
                    key={`${infos.name}-${index}`}
                    title={infos.title}
                    texte={infos.texte}
                />
            ))}
        </div>
    </main>
    )
}

export default About
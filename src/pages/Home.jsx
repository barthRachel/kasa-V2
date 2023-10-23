import '../css/Home.css';
import Banner from '../components/Banner';
import rentalInfos from '../data/logements.json';
import Card from '../components/Card';

function Home() {
    document.title = "Kasa | Accueil";
    
    return(

        <main className='mainHome'>
            <Banner wichPage="Home" />

            <div className='mainHomeContainer'>
                {rentalInfos.map((infos, index) => (
                    <Card 
                        key={`${infos.name}-${index}`}
                        cover={infos.cover}
                        title={infos.title}
                        id={infos.id}
                    />
                ))}
            </div>
        </main>
        
    )
}

export default Home
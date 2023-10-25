// Page de logement
import '../css/RentalSheet.css';
import rentalInfos from '../data/logements.json';
import React from 'react';
import Slideshow from '../components/SlideShow';
import RateScale from '../components/RateScale';
import Collapse from '../components/Collapse';
import Error from '../components/Error';
import { Navigate } from "react-router-dom";

function RentalSheet() {
    // On récupère l'id du logement passé en paramètre dans la barre de recherche
    const id = window.location.href.split('/')[window.location.href.split('/').length-1];
    // On regarde si l'id du logement existe réellement dans la liste de logement
    const isInfos = rentalInfos.findIndex(rental => rental.id === id);
    
    // Si l'id n'existe pas, on va sur la page d'erreur, sinon on continue
    if(isInfos === -1) {
        return(
            <Navigate to="/error_404" element={<Error />} />
        )
    }

    // On récupère les informations du logement
    // [infos] = toutes les informations / [tagList] = la liste des tags
    // [hostFirstName & hostLastName] = prénom & nom de l'hôte
    // [equipmentsList] = liste des équipements 
    const infos = rentalInfos[isInfos];

    const tagList = infos.tags;

    const hostFirstName = infos.host.name.split(" ")[0];
    const hostLastName = infos.host.name.split(" ")[1];

    const equimentsList = infos.equipments;
    
    // On change le titre de l'onglet pour y mettre le titre du logement
    document.title ="Kasa | " + infos.title;

    return(
        <main className='mainRentalSheet'>
            <div className='rentalSheetContainer'>
                <Slideshow pictureList={infos.pictures} />

                <div className='infosAndHostContainer'>
                    <div className='rentalSheetInfosContainer'>
                        <div className='titleContainer'>
                            <h1 className='primary'>{infos.title}</h1>
                            <p className='primary'>{infos.location}</p>
                        </div>

                        <ul className='rentalSheetTag'>
                            {tagList.map((tags, index) =>
                                <li className='primaryBackground' key={`${tags[index]}-${index}`}>{tags}</li>
                            )}
                        </ul>
                    </div>
                    
                    <div className='hostAndRateContainer'>
                        <div className='hostContainer'>
                            <div className='hostName'>
                                <p className='primary'>{hostFirstName}</p>
                                <p className='primary'>{hostLastName}</p>
                            </div>
                            <div className='hostProfilePicture'>
                                <img src={infos.host.picture} alt={`${hostFirstName} ${hostLastName}`} />
                            </div>
                        </div>

                        <RateScale scaleValue={infos.rating} />
                    </div>

                </div>

                <div className='descriptionAndEquipmentsContainer'>
                    <Collapse
                        key={`${hostFirstName}-${hostLastName}-1`}
                        title={"Description"}
                        texte={infos.description}
                    />

                    <Collapse
                        key={`${hostFirstName}-${hostLastName}-2`}
                        title={"Equipements"}
                        texte={
                            <ul className='equimentContainer'>
                                {equimentsList.map((infos, index) =>
                                    <li key={`${infos[index]}-${index}`}>{infos}</li>
                                )}
                            </ul>
                        }
                    />
                </div>
            </div>
        </main>
    )
}

export default RentalSheet;
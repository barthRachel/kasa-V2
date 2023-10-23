import '../css/RentalSheet.css';
import rentalInfos from '../data/logements.json';
import React from 'react';
import Slideshow from '../components/SlideShow';
import RateScale from '../components/RateScale';
import Collapse from '../components/Collapse';
import Error from '../components/Error';
import { Navigate } from "react-router-dom";

function RentalSheet() {
    const id = window.location.href.split('/')[window.location.href.split('/').length-1];
    const isInfos = rentalInfos.findIndex(rental => rental.id === id);

    if(isInfos === -1) {
        return(
            <Navigate to="/error_404" element={<Error />} />
        )
    }

    const infos = rentalInfos[isInfos];

    const tagList = infos.tags;

    const hostFirstName = infos.host.name.split(" ")[0];
    const hostLastName = infos.host.name.split(" ")[1];

    const equimentsList = infos.equipments;
    
    
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
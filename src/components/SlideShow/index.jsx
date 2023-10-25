// Composant SlideShow - Caroussel - pour la page de Logement
import './slideShow.css';
import React, { useState } from 'react';
import chevronLeft from '../../assets/ChevronLeft.png';
import chevronRight from '../../assets/ChevronRight.png';


function Slideshow({ pictureList }) {

    const lenghtPictureList = pictureList.length;
    let styleDisplay;

    //si le logement n'a qu'une seule image les chevrons et le numéro de photo ne s'affichent pas
    lenghtPictureList === 1 ? styleDisplay = "none" : styleDisplay = "flex";

    let [index, setIndex] = useState(0);

    // Fonction pour aller à la photo suivante
    function chevronNext(){
        setIndex((curIndex) =>
            curIndex === lenghtPictureList - 1 ? 0 : curIndex + 1
        )
    }

    // Fonction pour aller à la photo précédente
    function chevronPrevious(){
        setIndex((curIndex) =>
            curIndex === 0 ? lenghtPictureList - 1 : curIndex -1
        )

    }

  return (
    <div className="slideShowContainer" >
        <div className="slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
            {pictureList.map((infos, index) => (
                <div className="sliderImageContainer" key={`${infos[index]}-${index}`} > 
                    <img src={pictureList[index]} alt="Slideshow Rental" />

                    <div className='numberContainer' style={{display : styleDisplay}}>
                        {index+1 + " / " + lenghtPictureList}
                    </div>
                    
                </div>
            ))}
        </div>
            
        <div className='arrowContainer' style={{display : styleDisplay}}  >
            <p className='previous' onClick={chevronPrevious}> <img src={chevronLeft} alt="Chevron left" /> </p>
            <p className='next' onClick={chevronNext}> <img src={chevronRight} alt="Chevron right" /> </p> 
        </div>
    </div>
  );
}


export default Slideshow
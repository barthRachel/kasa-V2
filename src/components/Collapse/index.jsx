// Composant Collapse pour la page A Prospos et la page de Logement
import './collapse.css';
import React, { useRef, useState } from 'react';
import chevron from '../../assets/chevron.png';

function Collapse({title, texte}) {
    // Création du hook pour savoir si le collapse est ouvert ou fermé
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    // Création du hook pour récupérer la taille du texte de la collapse
    const collapseTexteRef = useRef();

    return(
        <div className='collapseContainer'>
            <div className='collapseTitleContainer primaryBackground'>
                <h1 className='collapseTitle'>{title}</h1>
                <p className='collapseButton' onClick={toggle}>
                    <img src={chevron} className={(!open ? "down" : "up") + " chevron"} alt='chevron' />
                </p>
            </div>
            <div className="collapseTexteContainer secondaryBackground" ref={collapseTexteRef} style={open ? {height: collapseTexteRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className='primary collapseTexte'>{texte}</div>
            </div>

        </div>
    )
}

export default Collapse
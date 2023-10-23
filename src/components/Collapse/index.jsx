import './collapse.css';
import React, { useRef, useState } from 'react';
import chevron from '../../assets/chevron.png';

function Collapse({title, texte}) {
    console.log(title)
    console.log(texte)

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

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
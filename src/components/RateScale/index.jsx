import './rateScale.css';
import active from '../../assets/activeStar.png';
import inactive from '../../assets/inactiveStar.png';
import React from 'react';

function RateScale(props) {
    const scaleValue = props.scaleValue;
    const range = [1, 2, 3, 4, 5];

    return(
        <aside className='rateContainer'>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ?
                <img key={rangeElement.toString()} src={active} alt='Rate star'/> :
                <img key={rangeElement.toString()} src={inactive} alt='Rate star'/>
            )}
        </aside>
    )

}

export default RateScale;
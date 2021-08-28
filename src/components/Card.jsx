import React from 'react'
import "./card.css";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Card({title,styles,textColor,total}) {

    const styling ={
        border : styles,
        color :textColor
    }
    return (
        <div className="card-div" style={styling}>
            <h3>{title}</h3>
            <p><span className="icon"><TrendingUpIcon/></span> {total}</p>
        </div>
    )
}

export default Card;

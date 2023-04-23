
import React from "react";
import "./Card.css"

function Card({src,title,address,beds,price=""}){
    return (
        <div className="card">
            <img src={src} className="image" alt=""/>
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{address}</h4>
                <h5>{beds}</h5>
                <h3>{price}</h3>
            </div>

        </div>
    )


}   
export default Card
import React from "react";


const Card = (props) => {
    

    return (

        <div className={"card"} style={{ width: "18rem" }}>
            <img src={props.image} className={"card-img-top"} alt={"Picture of a cat"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.title}</h5>
                <p className={"card-text"}>{props.description} </p>
                <button className={"btn btn-primary"}>Boka</button>
                <span>{props.price}</span>
            </div>
        </div>

    )
}

export default Card;


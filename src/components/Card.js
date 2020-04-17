import React from "react";


const Card = (props) => {
    

    return (

        <div className={"card"} style={{ width: "18rem" }}>
            <img src={props.image} className={"card-img-top"} alt={"Picture of a cat"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}>Card title</h5>
                <p className={"card-text"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className={"btn btn-primary"}>Boka</button>
            </div>
        </div>

    )
}

export default Card;
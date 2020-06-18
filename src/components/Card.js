import React, {Component} from "react";
import BookingForm from "./BookingForm"

import firebase from "./FirebaseConfig";


class Card  extends Component {
    state = {
        openModal:false,
        confirmation:undefined
    }
openModalEvent(){
    this.setState( {openModal: !this.state.openModal})
}
closeModalEvent(){
    this.setState({openModal:false})
}

/* onClickSaveToFirestore(){          
   const docRef=  firebase.firestore().collection("booking").doc(this.props.docId.toString());  
   docRef.set({
       name: this.props.title,
       description: this.props.description,
       price: this.props.price
   })


   }  {this.onClickSaveToFirestore.bind(this)} */
render(){
    return (
        <>

        {  (this.state.confirmation) ? 
       <div>Tack for din bokning. Din bokningstid är {this.state.confirmation}</div> : 
        <div className={"card"} style={{ width: "18rem" }}>
            <BookingForm openModal={this.state.openModal}  closeModal= {this.closeModalEvent.bind(this)}
              Callback={ (time)=>{
                  this.setState({ confirmation: time}) }}
            
            />
            <img src={this.props.image} className={"card-img-top"} alt={"Picture of a cat"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {this.props.title}</h5>
                <p className={"card-text"}>{this.props.description} </p>
                <button className={"btn btn-primary"} 
                 onClick={this.openModalEvent.bind(this)} >Boka</button>
                <span>{this.props.price}</span>
            </div>
        </div>
}
           </>
    )
}
}
export default Card;




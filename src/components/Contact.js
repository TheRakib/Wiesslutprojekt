import React, { Component } from "react";
import firebase from "./FirebaseConfig";

export default class Contact extends Component{


onSubmitForm(e){
    e.preventDefault();
  //firebase.firestore()

  const db = firebase.firestore();
         //userId ska komma från currentUser som finns inuti 
        //const userId = firebase.auth().currentUser.userId
        //if(firebase.auth().currentUser.userId) 
    const docRef=  db.collection("contactFormData").doc("userId");
     //else meddelande: Skapa ett konto för att kunna skicka meddelande till oss
    // doc("trash")
    docRef.set({
        name : e.target.elements.name.value,
        email: e.target.elements.email.value,
        meddelande: e.target.elements.textarea.value

        
    })

//condition state 



}
    render(){
        return(
               <div>
                    <form onSubmit={this.onSubmitForm.bind(this)}>
                        <input type="text" name="name" />
                        <input type="email"  name="email"/>
                        <textarea name="textarea" rows="4" cols="50"> </textarea>
                        <button>Kontakta oss</button>
                    </form>

                    <div>Tack för ditt mejl!</div>
               </div>

               
        )
    }
}
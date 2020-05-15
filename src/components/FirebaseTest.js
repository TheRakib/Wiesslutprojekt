import React, { Component } from "react";

import firebase from "./FirebaseConfig"




class FirebaseTest extends Component {

    onClickFirebase() {

        const db = firebase.firestore();
        const docRef = db.collection("booking").doc("info")
        //alt
        const docRef2 = firebase.firestore().collection("booking").doc("info2")
//läser data from firebase
        docRef
        .get()
        .then(booking => {
            if (booking.exists) {
                console.log("document data: ", booking.data())
            }
            else {
                console.log("error")
            }
        })

// skriva data i firebase
          docRef.set({
              item:"test",
              price:2000
          })
      docRef2.set({
          item:"test 2",
          price:3000
      })
    }

    render() {

        return (
            <div>
                <button onClick={this.onClickFirebase.bind(this)}> Hämta firestore info</button>
            </div>
        )
    }

}

export default FirebaseTest;
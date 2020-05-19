// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";

import firebase from "../FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component{
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       //
       firebase.auth().signOut();
    }
    //hämta data från firebase
    // profilbild8
    // radera kontot
    // finnas på databasen
    // raderar dem
    // fråga användare 
    // Varna användare ifall det finns bokingar 

    //edit på deras profile info

deleteAccount(){
    const userfromLocal = localStorage.getItem("user");
    console.log(userfromLocal);
    var user = firebase.auth().currentUser;
    console.log(user);

if(user){
     user.delete().then(function() {
  // User deleted.
      localStorage.clear();
       window.location.reload(false);
}).catch(function(error) {
  // An error happened.
});

}
  

}
    render(){
        return(
            <div>
                Profile info {this.props.userData}

                  <button onClick={this.deleteAccount.bind(this)}> Radera konto</button>
                  <button onClick={this.logOut.bind(this)}> Logout</button>
                 
            </div>
        )
    }
}


export default UserProfile;


// kontaktförmuläret till din email 

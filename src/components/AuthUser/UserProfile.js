// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";
import firebase from "../FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component{
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       firebase.auth().signOut();
    }
    //hämta data från firebase
    // profilbild
    // radera kontot
    // finnas på databasen
    // raderar dem
    // fråga användare 
    // Varna användare ifall det finns bokingar 

    //edit på deras profile info


    render(){
        return(
            <div>
                Profile info {this.props.userData}
                 <button onClick={this.logOut.bind(this)}> Logout</button>
                 
            </div>
        )
    }
}


export default UserProfile;


// kontaktförmuläret till din email 

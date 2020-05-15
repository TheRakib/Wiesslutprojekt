import React, { Component } from "react";

import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import firebase from "../FirebaseConfig";

class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        displayName: ""

    }



    //const enfunction = ()=> { }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");
        return (
            <div>
                {!loggedIn ?
                    <UserLogin userCredential={(user) => {
                        this.setState({ user: user.email })
                        localStorage.setItem("user", this.state.user)
                    }}
                    showDisplayName={ (username)=>{
                        //console.log("displyaname from parent" + username)

                         firebase.auth().onAuthStateChanged((user)=>{
                            user.updateProfile({
                                displayName :username
                            }).then( ()=>{
                                 this.setState({
                                     displayName: user.displayName
                                 })
                
                              console.log("display name"+ this.state.displayName)
                            })

                         })

                    } }
                    /> :
                    <UserProfile userData={this.state.displayName} />
                }
            </div>
        )
    }
}

export default UserPage;
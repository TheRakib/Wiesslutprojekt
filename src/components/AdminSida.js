import React, { Component } from "react";
import AdminProfile from "./Auth/AdminProfile";
import AdminLogin from "./Auth/AdminLogin";
class AdminSida extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }



 //const enfunction = ()=> { }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("jwt");
        return (
            <div>
                {!loggedIn ?
                    <AdminLogin userCredential={this.callback.bind(this)} /> :
                    <AdminProfile userData={this.state.user} />
                }
            </div>
        )
    }
}

export default AdminSida;

//Lägg till en logout component 
//Visa den i navbar om användare är inloggat 
//Flytta adminForm i adminProfile

// anonym funktion 
// Funktion expression
// arrow Funktion
// callback 
// promises
// async await 

// vanlig IAAS/cloud 
// admin:  hur många admin kommer vi vår app. (predictable)

// auto skalbar , serverless, pay per go. 
// user :  hur många user kommer vi vår app. (unpredictable)
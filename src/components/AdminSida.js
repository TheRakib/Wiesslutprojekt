import React, { Component } from "react";
import AdminProfile from "./Auth/AdminProfile";
import AdminLogin from "./Auth/AdminLogin";
class AdminSida extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }
    render() {

        const loggedIn = this.state.user||localStorage.getItem("jwt");
        return (
            <div>
                {!loggedIn ?
                    <AdminLogin userCredential={(e, jwt) => {
                        this.setState({ user: e.email, jwt: jwt })
                        localStorage.setItem("jwt", this.state.jwt)
                        localStorage.setItem("user", this.state.user)
                    }} /> :
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
import React, {Component} from "react";
import AdminProfile from "./Auth/AdminProfile";
import AdminLogin from "./Auth/AdminLogin"


class AdminSida extends Component{

state={ user: null}


    render(){
        return(
            <div>
                
                {!this.state.user &&  <AdminLogin userCredential={ (e)=> this.setState({user:e.email})}  /> }
                 
                 

                {this.state.user && <AdminProfile  userData={ this.state.user}/>}
                
                

                
               
               
            </div>
        )
    }
}

export default AdminSida;

//child till parent
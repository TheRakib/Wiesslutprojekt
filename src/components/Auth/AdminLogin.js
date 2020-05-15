
// register / login 
// conditional rendering
// state 

import React, {Component} from "react";
import axios from "axios";


class AdminLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }
 onClickRegister(){
     this.setState({condition:false})
 }

 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();
    axios
   .post('http://localhost:1337/auth/local', {
    identifier: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    //uppdatera state med response , localhost
   //this.props.userInfo(response.data.jwt)
   // props som kommer från parent och skickade vi den jwt token och user info till
    this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}



 



 onSubmitRegister(e){
     e.preventDefault();
     axios
    .post('http://localhost:1337/auth/local/register', {
    username: e.target.elements.username.value,
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    //localhost eller state med response data
     this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
 }
    render(){
        return(
            <div> 
             

         {this.state.condition  && 
         <div>
            <h2>Login</h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email"   name="email"/>
                    <input type="password" name="password" />
                    <button>Login</button>
                </form>
                 </div>
                
                }
                
               
           {!this.state.condition &&

           <div>
               <h2>Register</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username"/>
                     <input type="email" name="email" />
                    <input type="password" name="password" />

                    <button>Register</button>

                </form>
                </div>
                
                }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button onClick={this.onClickLogin.bind(this)}>Login</button>
<button onClick={this.onClickRegister.bind(this)}>Register</button>
                

            </div>
        )
    }
}

export default AdminLogin;
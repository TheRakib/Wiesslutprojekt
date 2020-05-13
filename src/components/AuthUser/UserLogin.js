
// register / login 
// conditional rendering
// state 

import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserLogin extends Component {

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

const email= e.target.elements.email.value;
const password = e.target.elements.password.value;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res=> this.props.userCredential(res.user.email)
    
    //react-router 
    //navigate 
    // skydda routerna 
    
    
     )

    

}
// reset password 
// mail och mailer reset länk och mall till användare 


 onSubmitRegister(e){
     e.preventDefault();
     const email= e.target.elements.email.value;
     const password= e.target.elements.password.value;

     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then(res=> this.props.userCredential(res.user.email))
   
   // aktivera verifering av email 
   
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

export default UserLogin;
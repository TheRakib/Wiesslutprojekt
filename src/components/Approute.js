import React from "react";

//npm i react-router-dom --save
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Booking from "./Booking";
import Card from "./Card"

import Navbar from "./Navbar"
import Form from "./Form";
import Notfoundpage from "./Notfoundpage";
import App from "./App";
import Adminform from "./Adminform";
import AdminLogin from "./Auth/AdminLogin"
import AdminSida from "./AdminSida";
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";
import Contact from "./Contact";
import ParentComponent from "./ParentComponent";

//import UserLogin from "./AuthUser/UserLogin";
//import Formular from "../pages/Formular"



const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>  
                    
            
                 <Route path="/" component={App} exact ></Route>
                 <Route path="/card" component={Card} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Form}></Route>
                 <Route path="/userprofile" exact component={UserProfile}></Route> 
                 <Route path="/adminsida" exact component={AdminSida}></Route>
                 <Route path="/firebasetest" exact component={FirebaseTest}></Route>

                 <Route path="/contact" exact component={Contact}></Route>
                 
                 
                 
                 
                 <Route path="/userpage" exact component= {UserPage}></Route>
                 
                 
                 
                 <Route component={Notfoundpage}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;

//stänga cmsserver från playground
// skapa en cmsserver i din original app 
// starta den 
// gå in till admin dashboard 
//skapa minst 8 produkter 
// presentera dem. 
//glöm ej publicera. ger behörighet

// npm run develop  //för att starta strapi server

import React from "react";

//npm i react-router-dom --save
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Booking from "./Booking";

import Navbar from "./Navbar"
import Form from "./Form";
import Notfoundpage from "./Notfoundpage";
import App from "./App";
import Adminform from "./Adminform";
import AdminLogin from "./Auth/AdminLogin"
//import Formular from "../pages/Formular"

const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>
                 <Route path="/" component={App} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Form}></Route>
                 <Route path="/admin" exact component= {Adminform}/>
                 <Route path="/adminLogin" exact component={AdminLogin}></Route>
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

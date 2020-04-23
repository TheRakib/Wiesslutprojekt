import React from "react";

//npm i react-router-dom --save
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";

import Navbar from "./Navbar"
import Form from "./Form";
import Notfoundpage from "./Notfoundpage";
//import Formular from "../pages/Formular"

const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>

                 <Navbar/>
                 <Switch>
                 <Route path="/" component= {Card} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Form}></Route>
                 <Route component={Notfoundpage}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;
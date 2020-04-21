import React from "react";

import { BrowserRouter, Route} from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";

import Navbar from "./Navbar"
//import Form from "./Form";
import Formular from "../pages/Formular"

const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>
                 <Navbar/>
                 <Route path="/" component= {Card} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Formular}></Route>
            
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;
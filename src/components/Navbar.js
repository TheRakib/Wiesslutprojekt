import React from "react";
import {Link} from "react-router-dom";



const Navbar = ()=>{

    return(
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
  <Link className={"navbar-brand"} to="/">Navbar</Link>
  <button className={"navbar-toggler"} type={"button"} >
    <span className={"navbar-toggler-icon"}></span>
  </button>
  <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
    <div className={"navbar-nav"}>
      <Link className={"nav-item nav-link active"} to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className={"nav-item nav-link"} to="/card">Features</Link>
       <Link className={"nav-item nav-link"} to="/adminsida">Admin</Link>
        <Link className={"nav-item nav-link"} to="/admin">AdminForm</Link>
       <Link className={"nav-item nav-link"} to="/bookings">Booking</Link>
       <Link className= {"nav-item nav-link"} to="/Form">Form</Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
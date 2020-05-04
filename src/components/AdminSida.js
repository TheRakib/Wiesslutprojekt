import React, {Component} from "react";
import AdminProfile from "./Auth/AdminProfile";
import AdminLogin from "./Auth/AdminLogin"


class AdminSida extends Component{


state={ user: false}


    render(){
        return(
            <div>
                visa adminlogin

                <AdminProfile />
                or
                visa adminprofile
                <AdminLogin userInfo={(e)=> console.log(e)}  />
            </div>
        )
    }
}

export default AdminSida;

//child till parent
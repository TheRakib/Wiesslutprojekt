import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component{

    state={
         title:" "
    }

async onSubmitToApi(e){
    e.preventDefault();


    //console.log(e.target.elements.file.files[0])
     this.setState({title: e.target.elements.title.value})

   const res = await axios.post("http://localhost:1337/products", {

         title: e.target.elements.title.value,
         description: e.target.elements.description.value,
         price: e.target.elements.price.value,
         image: "nån text"
     })


    
console.log(res)


}

    render(){
        return(
            <div>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     <input type="text" name="title"/>
                     <input type="text" name="description"/>
                     <input type="number" name="price"/>

                     <input type="file" name="file"/>
                     
                     <button>Spara</button>
                     {this.state.title}
                 </form>

            </div>
        )
    }
}

export default Adminform;
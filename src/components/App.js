
import React, {Component} from "react";
import Card from "./Card";
import axios from "axios";
import ViewEditToggle from "./HOC/ViewEditToggle";
import CollapseExpand from "./HOC/CollapseExpand";


//get 
//post
//put
//delete

// tech stack :    database : mysql, php, react
class App extends Component{

// State: hantera data inuti componentet 

      state={
            products: [
                  {
                        id:1, name:"T-shirt"
                  }, 
                  {
                        id:2 , name:"Jeans"
                  }
            ], 
           
      }
     
// skapade strapi

// skapade data inuti strapi 

// från React -  fetch   Tredjeparts:  axios,      request-promise

 // axios.get("Strapi-produkt-url")
 // response: Lista av produkter



// componentDidUpdate(){
//         console.log("component did update")
// }

//component renderades/mounted
async componentDidMount (){
// async await 
    const res=  await  axios.get("http://localhost:1337/products")
    
            console.log(res.data);
            this.setState ( {products:res.data})
     /*  axios.get("http://localhost:1337/products").then( res=>{
            console.log(res.data);
            this.setState ( {products:res.data})
      }) promise  */
//this.state.products
}


// props - skicka data parent till child 
//props.title, props.price  
// ifall om det är en klass komponent: this.props.title


// props :- child till parent 
//   callback function


render() {
    return(
          <div>
            

               <ViewEditToggle title ={"hello from wie19"}/>

               <CollapseExpand list={this.state.products} />

                {this.state.products.map((product) =>
                     
                      <Card 
                      key={product.id}
                      docId={product.id}
                      title={product.title} 
                      price={product.price}
                      description= {product.description}
                     
                       />
                )}
               


           
               

          </div>

    )
      }
     
}
export default App;



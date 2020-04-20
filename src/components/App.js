
import React from "react";
import Card from "./Card";
import faker from "faker";

import Form from "./Form"

const App = ()=>{
    return(
          <div>
                <nav>Narbar ska läggas här</nav>
                <Card  image={faker.image.cats()}/>
                <Card  image={faker.image.avatar()} />

                <Form/>
                 

          </div>

    )
}
export default App;
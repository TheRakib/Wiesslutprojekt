
import React from "react";
import Card from "./Card";
import faker from "faker";

const App = ()=>{
    return(
          <div>
                <nav>Narbar ska läggas här</nav>
                <Card  image={faker.image.cats()}/>
                <Card  image={faker.image.avatar()} />

          </div>

    )
}
export default App;
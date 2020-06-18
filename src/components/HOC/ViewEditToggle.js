import React, {Component} from 'react';


import withToggle from "./withToggle";


 //const ViewEditToggle= (props)=> {props.toggle}
//const ViewEditToggle = ( {toggle, toggleStatus, title }) => {

    class ViewEditToggle extends Component {

   // hur vi läser props i class component??

      // this.props.toggle 
      // const { toggle , toggleStatus, title} = this.props;

      
      
  
//class component 
//state onchange 
//controlled element 
render(){
     const { toggle , toggleStatus, title} = this.props;

    return (
        <div>
             { toggleStatus ?
              <input type="text" value={title} />
             : <h1>{title}</h1>

             }

             
               
            <button onClick={toggle}>

                {toggleStatus ? "Cancel" :"edit"}
            </button>

        </div>
    )
}
}



export default   withToggle(ViewEditToggle);

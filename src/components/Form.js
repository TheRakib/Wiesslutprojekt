import React, { Component } from "react";
class Form extends Component {

    constructor(props) {
        super(props);

        //initillerat state
        this.state = {
            name: "Ange ditt namn",
            appointmentTime: "till ex. 10.00",
            mobile: "x7x0000000"
        }

    }
    
    //spara state i localStorage
    // this and arrow function

//lägg dem in i handleOnChange
// console.log("name properties" , e.target.name)
   // console.log(e.target.value)
     // [e.target.name] : 
     //måste du ha name properties i input 
      // name properties värdena måste vara samma state 
handleOnChange = (e)=>{
       this.setState({[e.target.name]: e.target.value})  
}



   /*  handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    } */
 


    //skapa en metod 
    handleOnSubmit(e){
        e.preventDefault()
     /* this.setState({name:e.target.elements.Name.value, 
          appointmentTime: e.target.elements.Time.value 
 }) */
  // console.log(e.target.elements.Name.value)
        //this.setState({})
    }
    // uppdatera state med setState()


    //form kommer att anropa metoden med hjälp av event 

// value properties
// value properties kommer att ha värdet från state/this.state....
// state ska ha default värdet 
// state ska inte vara undefined/Null

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input value={this.state.name} onChange={this.handleOnChange} type={"text"}   name={"name"}></input>
                    <input value={this.state.appointmentTime} onChange={this.handleOnChange} type={"text"}  name={"appointmentTime"}></input>
                    <input value={this.state.mobile}  onChange={this.handleOnChange} type={"number"}  name={"mobile"}></input>
                    <button>Bekräfta</button>
                </form>
 
                {this.state.name}  <br/>
                {this.state.appointmentTime} <br/>
                {this.state.mobile}
            </div>
        )
    }

}



export default Form;


// controlled elements : React har koll på alla value 
 //or 
// uncontrolled elements:  JS DOM 
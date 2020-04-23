import React, { Component } from "react";
class Form extends Component {

    constructor(props) {
        super(props);

        //initillerat state
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile: undefined
        }

    }
    
    //spara state i localStorage
    // this and arrow function


    /* handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }
 */


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


    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} placeholder={"ange ditt name"}  name={"Name"}></input>
                    <input type={"text"} placeholder={"ange önskat datum"} name={"Time"}></input>
                    <input type={"number"} placeholder={"ange telefon nummer"} name={"Mobile"}></input>
                    <button >Bekräfta</button>
                </form>

                {this.state.name}
            </div>
        )
    }

}

export default Form;

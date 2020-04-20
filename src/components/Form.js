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


    handleOnChangeName= (e)=> {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime=(e) =>{
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile=(e)=> {
        this.setState({ mobile: e.target.value })
    }



    //skapa en metod 
    handleOnSubmit(e) {
        e.preventDefault()


        //this.setState({})
    }
    // uppdatera state med setState()


    //form kommer att anropa metoden med hjälp av event 


    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} placeholder={"ange ditt name"} onChange={this.handleOnChangeName}></input>
                    <input type={"text"} placeholder={"ange önskat datum"} onChange={this.handleOnChangeTime}></input>
                    <input type={"number"} placeholder={"ange telefon nummer"} onChange={this.handleOnChangeMobile}></input>
                    <button type={"submit"} onSubmit={this.handleOnSubmit}>Bekräfta</button>
                </form>

                <div>  {this.state.name}</div>
                <div>  {this.state.appointmentTime}</div>
                <div>  {this.state.mobile}</div>
            </div>
        )
    }

}

export default Form;

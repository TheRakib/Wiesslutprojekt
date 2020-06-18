import React, {Component} from "react";



// en function 
// tar en component som arguement 
// har en klass component 
// returnerar modifirad Komponentet

const withToggle = (WrappedComponent) => 

  class WithToggle extends Component {

         state ={
             toggleStatus:false
         }

   toggle(){
       this.setState({
           toggleStatus: !this.state.toggleStatus
       })
   }


   render(){

       return (
           <WrappedComponent {...this.props} 
           toggle={this.toggle.bind(this)}
           toggleStatus={this.state.toggleStatus}
           
           />
        
       )
   }


  

}

export default withToggle;
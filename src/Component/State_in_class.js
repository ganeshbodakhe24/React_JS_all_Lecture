 import React from "react";

 class State_in_class extends React.Component {
    constructor(){
        super();
        this.state={
            Name:"ganesh",
        }
    }
    // this is the function but without funcction as a starting name 
    changeHandler(){
        this.setState({Name:"Raj"})
    }
    render() {
      return (
        <div>
          <h1>This is the use state ex  in class</h1>
          <h1>{this.state.Name}</h1>
          <button onChange={()=>this.changeHandler()}>Click Me</button>
        </div>
      )
    }
 }
 export default State_in_class;
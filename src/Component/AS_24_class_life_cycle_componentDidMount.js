// component didMount is run when run method is run this is shign that html and css 
// proper loaded and component is ready to show
// this call once hance beatter for api call 


import React from "react";

class AS_24_class_life_cycle_componentDidMount extends React.Component{
    constructor(){
        super();
        console.log("constructor");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        console.log("render")
      return (
        <div>
          <button onClick={()=>{this.setState({name:"sham"})}}> change state</button>
        </div>
      )
    }
}
export default AS_24_class_life_cycle_componentDidMount ;
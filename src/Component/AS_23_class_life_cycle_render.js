// after constructor render is run
//it will run when component state and props are updated to show new output
// not for api call 
import React from "react";
 class AS_23_class_life_cycle_render extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
     this.state={
        name:"Ganesh"
     }
    }
    render(){
        console.log(this.state.name);
        return(
            <><h1>This is ganesh</h1>
            <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"sham"})}}> click me</button>
            </>
        )
    }
 }

 export default AS_23_class_life_cycle_render;
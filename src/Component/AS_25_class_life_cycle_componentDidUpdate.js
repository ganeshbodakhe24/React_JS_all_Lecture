//run after component did mount
//it will call automaticaly when changes in state
//not usable for state changes will cause an loop 
//not for api call
//to verify is any changes in state or not because it have prestate,and preprops
import React from "react";

class AS_25_class_life_cycle_componentDidUpdate extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={
            count:0,
            
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(preProps,preState){
        console.log("componentDidUpdate",preState);
    }
    render(){
        console.log("render")
        return(
            <>
            <h1>This is componetn</h1>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>change state </button>
            </>
        )
    }
}
export default AS_25_class_life_cycle_componentDidUpdate;
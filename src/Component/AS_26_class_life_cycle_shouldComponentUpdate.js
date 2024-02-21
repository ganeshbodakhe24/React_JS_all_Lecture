
// if shouldComponetMount return false then component not going to rerender else rerender the component
// shouldCompnentMount give right when chould rerender the componet and when not increace speed

import React from "react";
class AS_26_class_life_cycle_shouldComponentUpdate extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={
            count:0
        }
    }
    componentDidMount(){
      console.log("componentDidMount")  
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")  
      }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate",this.state.count);
        if(this.state.count>5 && this.state.count<10){
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        console.log("render");
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}> change state</button>
            </>
        )
    }
}
export default AS_26_class_life_cycle_shouldComponentUpdate;
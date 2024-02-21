import React from "react";

class As_27_class_life_cycle_componentWillUnmount_child extends React.Component{
    constructor(){
        super()
    }    
 componentWillUnmount(){
    alert("unmount component");
 }
 render(){
    return(
        <h1>child Component</h1>
    )
 }
}
export default As_27_class_life_cycle_componentWillUnmount_child;
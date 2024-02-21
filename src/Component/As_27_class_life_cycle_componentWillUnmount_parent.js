//  {/* when we remove the component then it is automaticaly distroyed that component */}

import React from "react";
import As_27_class_life_cycle_componentWillUnmount_child from "./As_27_class_life_cycle_componentWillUnmount_child";

class As_27_class_life_cycle_componentWillUnmount_parent extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    render() {
      return (
        <div>
          {this.state.show?<As_27_class_life_cycle_componentWillUnmount_child></As_27_class_life_cycle_componentWillUnmount_child>
          :<h1>Child component removed</h1>}
          <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
        </div>
      )
      
    }


}

export default As_27_class_life_cycle_componentWillUnmount_parent;
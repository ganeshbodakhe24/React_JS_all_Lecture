import React from "react";

class AS_39_for_class_pure_component_child extends React.PureComponent{
    render(){
        console.log("child rerender");
        return(
            <>
            <h1> class data : {this.props.data}</h1>
            </>
        )
    }
}

export default AS_39_for_class_pure_component_child;
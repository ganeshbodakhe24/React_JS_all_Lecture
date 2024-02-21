import React from "react";

function AS_20_function_as_props_child(props){
    return(
        <>
        <h3>Child Function</h3>
        {/* <button onClick={props.valueSelected}>Sellect Me </button> */}
        <button onClick={()=>{props.valueSelected()}}>Sellect Me </button>

        </>
    );
}
export default AS_20_function_as_props_child;
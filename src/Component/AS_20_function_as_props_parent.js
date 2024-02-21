import React from "react";
import AS_20_function_as_props_child from "./AS_20_function_as_props_child";
function AS_20_function_as_props_parent(){
    function valueSelected(){
        alert("Value Selected");
    }
    return(
        <>
        <AS_20_function_as_props_child valueSelected={valueSelected}></AS_20_function_as_props_child>
        </>
    )
}
export default AS_20_function_as_props_parent;
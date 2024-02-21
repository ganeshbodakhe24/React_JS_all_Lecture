import { forwardRef } from "react";

function AS_43_forwordRef_child(props,ref){
    return(
        <>
        <input type="text" ref={ref}></input>            
        </>
    )
}
export default forwardRef(AS_43_forwordRef_child);
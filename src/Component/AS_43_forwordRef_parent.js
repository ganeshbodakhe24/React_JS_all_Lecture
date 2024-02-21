import {useRef}  from 'react';
import AS_43_forwordRef_child from './AS_43_forwordRef_child';
function AS_43_forwordRef_parent(){
    let inputRef=useRef(null);
    function inputHandle(){
        console.log("function");
    // inputRef.current.value="10000";
    inputRef.current.style.color="red";
    inputRef.current.style.backgroundColor="yellow";
    }
    return(
        <>
            {/* <input type='text' ref={inputRef}></input> */}
            <AS_43_forwordRef_child ref={inputRef}></AS_43_forwordRef_child>
            <button onClick={inputHandle}>Click Me</button>
        </>
    )
}
export default AS_43_forwordRef_parent;
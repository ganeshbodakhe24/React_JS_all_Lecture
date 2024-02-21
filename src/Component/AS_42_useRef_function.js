import {useRef} from 'react'

function AS_42_useRef_function(){
    let inputRef=useRef(null);
    function handleInput(){
        console.log("function call");
        // inputRef.current.value="100";
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.backgroundColor="black";

    }
    return(
        <div>
            <input type='text' ref={inputRef}></input>
            <button onClick={()=>{handleInput()}}>Click Me</button>
        </div>
    )
}

export default AS_42_useRef_function;
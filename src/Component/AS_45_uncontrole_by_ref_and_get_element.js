import React,{useRef} from "react";

function AS_45_uncontrole_by_ref_and_get_element(){
    let input1=useRef(null);
    let input2=useRef(null);

    function submitHandler(e){
     
        console.log("first input1", input1.current.value);
        console.log("second input2", input2.current.value);
        let input3=document.getElementById("input3").value;
        console.log("Third input3",input3);
        e.preventDefault();

    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" ref={input1}></input>
                <br></br> <br></br>
                <input type="text" ref={input2}></input>
                <br></br><br></br>
                <input type="text" id="input3"></input>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </>
    )
}
export default AS_45_uncontrole_by_ref_and_get_element;
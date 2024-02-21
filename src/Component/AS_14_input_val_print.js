import React ,{useState} from "react";

function AS_14_input_val_print(){
    const[data,setData]=useState(null);
    const[flag,setFlag]=useState(false);

    function changeState(event){
        setData(event.target.value);
        setFlag(false)
    }
    return(
        <>
        <div>
        <input type="text" onChange={changeState}></input>

        <h1>{data}</h1>
        <button onClick={()=>{setFlag(true)}}>Print Input</button>
        <h3>print value when button click :::: </h3>
        {
            flag ? <h1>{data}</h1> : null 
        }
        </div>
        </>
    )
}
export default AS_14_input_val_print;
import { useState } from "react";

function AS_17_Form_handling(){
    const[name,setName]=useState(null);
    const[interest,setInterest]=useState(null);
    const[tac,setTac]=useState(false);

    function formSubmit(e){
        console.log(name,interest,tac);
        e.preventDefault();
    }
    return(
        <>
        <form onSubmit={formSubmit}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <select onClick={(e)=>{setInterest(e.target.value)}}>
            <option value={"select opt"}>select Option</option>
            <option value={"car1"}>Car</option>
            <option value={"bycicle1"}>Bycicle</option>
            <option value={"MotorCycle1"}>MotorCycle</option>
        </select>
        <br></br>
        <input type="checkbox" onClick={(e)=>{setTac(false)}} ></input><span>Accept Terms and con</span>
        <br></br>
        <input type="submit" value={"submit"}></input>
        <br></br>
        </form>
        </>
    )

}

export default AS_17_Form_handling;
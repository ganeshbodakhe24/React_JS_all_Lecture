import { useSearchParams } from "react-router-dom";
import { useState } from "react";
function Contact(){
    const[searchParams,setSearchParams]=useSearchParams();
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    function formHandling(e){
        e.preventDefault();
        setSearchParams({name:name,age:age});
    }
    let paramsName=searchParams.get('name');
    let paramsAge=searchParams.get('age');
    return(
        <>
            <h2>This is the Contact page</h2>
            <form style={{textAlign:"center"}} onSubmit={formHandling}>
            <label htmlFor="name">
            Enter Name: 
            <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
            </label>
            <br></br><br></br>
            <label htmlFor="name">
            Enter age: 
            <input type="number" onChange={(e)=>{setAge(e.target.value)}}></input>
            </label>
            <br></br><br></br>
           <button>Submit</button>
            </form>
            <h1>{paramsName}</h1>
            <h1>{paramsAge}</h1>
        </>
    )
}
export default Contact;
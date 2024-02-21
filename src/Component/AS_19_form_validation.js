import {useState} from 'react';

function AS_19_form_validation(){
    const[user ,setUser]=useState("");
    const[pass,setPass]=useState("");
    const[userErr,setUserErr]=useState(false);
    const[passErr,setPassErr]=useState(false);

function formHandling(e){
    if(userErr==true ||passErr==true){
        alert("Invalid Input ");
    }
    else{
        alert("User Thanks ");
    
    }
    e.preventDefault();
}
function userHandling(e){
    let item=e.target.value;
    console.log(item);
    if(item.length<3){
        setUserErr(true);
    }
    else{
        setUserErr(false);
    }
    setUser(item);
}
function passHandler(e){
    let item=e.target.value;
    console.log(item);
    if(item.length<3){
        setPassErr(true);
    }
    else{
        setPassErr(false);
    }
    setPass(item);
}
    return(
        <div>
            <form onSubmit={formHandling}>
                <input type='text' placeholder='Enter Your Name' onChange={userHandling}></input>
                <br></br>
                {
                    userErr?<span>Invalid user name</span>:null
                }
                <br></br>
                <br></br>
                <input type='text' placeholder='Enter Password' onChange={passHandler}></input>
                <br></br>
                {
                    passErr?<span>Invalid Password </span>:null
                }
                <br></br>
                <button type='submit'>Submit</button>
            </form>
            <h1>{user}</h1>
            <h1>{pass}</h1>

        </div>
    )
}
export default AS_19_form_validation;
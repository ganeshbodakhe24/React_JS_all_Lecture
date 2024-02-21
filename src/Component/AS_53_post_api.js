import React, { useState, useEffect } from 'react';

function AS_53_post_api(props) {
    let [name, setName] = useState("");
    let [rollno, setRollNo]=useState('');

    function formHandling(e) {
        e.preventDefault();
        // console.log(name);
        // console.log(rollNo);
        let data={name,rollno};
        console.log(data);
        fetch("http://localhost:4000",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
            }).then((result)=>{
               result.json().then((resp)=>{
                console.log(resp);
                props.getData();
               })
            })
    }
    return (
        <>
            <form onSubmit={formHandling}  style={{textAlign:"center"}}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
                <br></br><br></br>
                <input type='number' value={rollno}  onChange={(e)=>{setRollNo(e.target.value)}}></input>
                <br></br> <br></br>
                <button   type='submit'>Submit form </button>
            </form>
        </>
    )
}
export default AS_53_post_api;
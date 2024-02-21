import { useState } from "react";

function AS_57_pre_value_of_state(){
const[count,setCount]=useState(1);

function changeState(){
    let ran=Math.floor(Math.random()*10);
    // setCount((pre)=>{
    //     console.log(pre);
    //     if(pre<5){
    //         alert("value is less than 5")
    //     }
    //     return ran;
    // })

    for(let i=0; i<5 ;i++){
        setCount((pre)=>{
          return  pre+1;
        })
    }
}
return(
    <>
    <div style={{textAlign:"center"}}>
    <h1>{count}</h1>
    <button onClick={()=>{changeState()}}> change count</button>
    </div>
    </>
)
}
export default AS_57_pre_value_of_state;
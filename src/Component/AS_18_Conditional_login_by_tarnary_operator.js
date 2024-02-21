import { useState } from "react";

function AS_18_Conditional_login_by_tarnary_operator(){

    const[loggin,setloggin]=useState(1);
// let loggin=2;
 function inputHandler(e){
    let item=e.target.value;
    setloggin(item);
}
    return(
        
        <>  
            <input type="number" onChange={inputHandler}></input>
              {
            loggin ==1 ? <h1>Ganesh</h1>
            :loggin==2 ? <h2>Sham</h2>
            :<h2>Raj</h2>
        }
        </>

    )
}
export default AS_18_Conditional_login_by_tarnary_operator;
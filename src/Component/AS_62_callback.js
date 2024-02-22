// import { useState,useCallback } from "react";
// import AS_62_callback_child from "./AS_62_callback_child";
// function AS_62_callback(){
//     const[count,setCount]=useState(0);
//     function random(){
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>
//             Click Me
//         </button>
//         <AS_62_callback_child random={random}></AS_62_callback_child>
//         </>
//     )
// }
// export default  AS_62_callback;
// because of random function is recreating on state change change component is rerenderin even
//there is memo hook is used 

import { useState,useCallback } from "react";
import AS_62_callback_child from "./AS_62_callback_child";
function AS_62_callback(){
    const[count,setCount]=useState(0);
    const random=useCallback(
    function random(){
    },[])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>
            Click Me
        </button>
        <AS_62_callback_child random={random}></AS_62_callback_child>
        </>
    )
}
export default  AS_62_callback;

//conditionaly it is loaded only one not rerender comp even change the state
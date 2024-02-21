import React,{useState} from "react";
import AS_30_useEffect_conditional_props_change_child from "./AS_30_useEffect_conditional_props_change_child";
function AS_30_useEffect_conditional_props_change_parent(){
    const[data,setData]=useState(0);
    const[count,setCount]=useState(100);

    return(
        <>
        <AS_30_useEffect_conditional_props_change_child data={data} count={count}></AS_30_useEffect_conditional_props_change_child>

        <button onClick={()=>{setData(data+1)}}>inc Data</button>
        <button onClick={()=>{setCount(count+1)}}>inc count</button>
        </>
    )
}
export default AS_30_useEffect_conditional_props_change_parent;

//  on change state data then  change the props.data then use effect with conditon props.data will call 
//on change the state count  change the props.count then use effect with condition prps.coutn will call 
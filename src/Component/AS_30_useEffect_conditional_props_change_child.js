import { useEffect } from "react";

function AS_30_useEffect_conditional_props_change_child(props){
    useEffect(()=>{
        console.log("porps data change"+props.data);

    },[props.data]);
    useEffect(()=>{
        console.log("props count change"+props.count);

    },[props.count]);

    return(
        <>
        <h1>count : {props.count}</h1>
        <h1>data:{props.data}</h1>
        </>
    )
}
export default AS_30_useEffect_conditional_props_change_child;


// on change the props.data then use effect with conditon props.data will call 
//and on change the props.count then use effect with condition prps.coutn will call 
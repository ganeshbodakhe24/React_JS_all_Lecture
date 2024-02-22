import AS_60_context_api_child from "./AS_60_context_api_child";
import { createContext,useState } from "react";
export const GlobalInfo=createContext();
//Global Info is globaly availabel

function AS_60_context_api_parent(){
    const[color,setColor]=useState("green");
    const[day,setDay]=useState('sunday');

    function getDay(data){
        setDay(data);
    }
    return(
        <>
        <GlobalInfo.Provider value={{appcolor:color,getDay:getDay}}>
        <h1>Parent component</h1>
        <h1>{day}</h1>
        <AS_60_context_api_child></AS_60_context_api_child>
        </GlobalInfo.Provider>
        </>
    )
}
export default AS_60_context_api_parent;
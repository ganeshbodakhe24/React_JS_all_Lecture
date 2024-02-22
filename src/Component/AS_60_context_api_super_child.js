import { GlobalInfo } from "./AS_60_context_api_parent";
import { useContext } from "react";

function AS_60_context_api_super_child(){
    const{appcolor}=useContext(GlobalInfo);
    return(
        <><h2>{appcolor}</h2>
        <h1 style={{color:appcolor}}>This is the super child</h1>
        </>
    )
}
export default AS_60_context_api_super_child;
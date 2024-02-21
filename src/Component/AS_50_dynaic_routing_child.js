import React from "react";
import { useParams } from "react-router-dom";
function AS_50_dynamic_routing_child(){
    const params = useParams();
    return(
        <>
        <h1>This is the Child</h1>
        <h1>Hii {params.id}</h1>
        <h1>Hii {params.name}</h1>
        
        </>
    )
}

export default AS_50_dynamic_routing_child;
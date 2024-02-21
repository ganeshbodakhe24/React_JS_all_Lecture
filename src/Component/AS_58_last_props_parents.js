import React from 'react'
import { useState } from 'react';
import AS_58_last_props_child from './AS_58_last_props_child';


function AS_58_last_props_parent() {
    const [count, setCount] = useState();
    return (
        <>
            <AS_58_last_props_child count={count}></AS_58_last_props_child>

            <div style={{ textAlign: "center" }}>
                <button onClick={() => { setCount(Math.floor(Math.random() * 10)) }}>Submit</button>

            </div>

        </>
    )
}
export default AS_58_last_props_parent;

// here before update the porps the useEffet call hance the old velue is copied 
//even name is (props.count ) is curent value but it is not updte in use effect 

import { useState } from "react";

function Inc_dec_number() {

    const [Number, setNumber] = useState(1);
    function inc() {
        let value = Number;
        value++;
        setNumber(value);  
    }
    function dec() {
        let value = Number;
        value--;
        setNumber(value);
    }
    return (
        <div>
<h1 style={{textAlign:"center"}}>{Number}</h1>
            <div style={{textAlign:"center"}}>
                <button type="button" onClick={inc}>Increase</button>
                <button type="button" onClick={dec}>Decrease</button>

            </div>  
            
        </div> 
    )    
}    
export default Inc_dec_number;
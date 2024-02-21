import React from 'react';

function AS_15_show_hide_toggle(){
    const[state,setState]=React.useState(false);

    return(
        <>
        <h1>This is Toggler</h1>
        {
            state ? <h1>Hii Ganesh</h1>:null
        }

        <button onClick={()=>{setState(true)}}>Show</button>
        <button onClick={()=>{setState(false)}}>Hide</button>

        <button onClick={()=>{setState(!state)}}>Toggle</button>
        </>
    )
}

export default AS_15_show_hide_toggle;
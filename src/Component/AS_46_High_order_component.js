import React, { useState } from 'react'
// parent function 
function AS_46_High_order_component() {
    return (
        <>
            <h1>Parent Component</h1>
            <HOCRed cmp={Counter}></HOCRed>
            <HOCGreen cmp={Counter}></HOCGreen>
            <HOCBlue cmp={Counter}></HOCBlue>

        </>
    )
}
export default AS_46_High_order_component;
// Higher order Component
function HOCRed(props) {
    return (
        <>
            <div style={{ backgroundColor: "red", }}>
                <h1>Red</h1>
                <props.cmp></props.cmp>
            </div>
        </>
    )
}
// Higher order Component
function HOCBlue(props) {
    return (
        <>
            <div style={{ backgroundColor: "blue", }}>
                <h1>Blue</h1>
                <props.cmp></props.cmp>
            </div>
        </>

    )
}
// Higher order Component
function HOCGreen(props) {
    return (
        <>
            <div style={{ backgroundColor: "green", }}>
                <h1>Green</h1>
                <props.cmp></props.cmp>
            </div>
        </>
    )
}
// child component
function Counter() {
    let [count, setCount] = useState(0);
    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={() => { setCount(count + 1) }}>Submit</button>
        </>
    )
}
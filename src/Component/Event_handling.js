
export function EventHandling (){
  function  buttonHandler(){
        alert("button Handler");
    }
    return(
        <>
        <h1>This is ganesh</h1>
        <button onClick={buttonHandler}>Click Me</button>
        <button  onClick={()=>{alert("You click on callback function")}}>Click Me</button>
        </>
    )
}
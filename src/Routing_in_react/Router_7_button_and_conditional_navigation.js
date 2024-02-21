
import { useNavigate } from "react-router-dom";

function Router_7_button_and_conditional_navigation(){
    const Navigate=useNavigate();
    const navToPage=()=>{
        let val=true;
        if(val){
            Navigate('/');
        }
        else{
            Navigate('/about')
        }
    }

    return(
        <>
        <button onClick={()=>{Navigate("/")}}>Home Page</button>
        <br></br><br></br>
        <button onClick={()=>{Navigate("/about")}}>about Page</button>

        <br></br><br></br>
        <h1>Conditional navigation</h1>
        {/* if true then move to home else about */}
        <button onClick={(()=>{navToPage()})}>Conditioncal Navitate</button>
        </>
    )
}
export default Router_7_button_and_conditional_navigation;
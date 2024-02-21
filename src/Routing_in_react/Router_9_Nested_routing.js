
import { Link ,Outlet, Route } from "react-router-dom";

function Router_9_Nested_routing(){
    return(
        <>
        <h1>This is the Nested Routing</h1>
        <Link to='youtube'>Youtube</Link>
        <br></br>
        <Link to='company'>Company</Link>
        <Outlet></Outlet>
        </>
    )
}
export default Router_9_Nested_routing
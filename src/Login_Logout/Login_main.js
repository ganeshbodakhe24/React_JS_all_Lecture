import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Protected from "./Portected";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function Login_main(){
    return(
        <>
       <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path="/" element={ <Protected Component={Home} ></Protected>}></Route>
            <Route path="/about" element={ <Protected Component={About} ></Protected>}></Route>
            <Route path="/contact" element={ <Protected Component={Contact} ></Protected>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/logout" element={<Logout></Logout>}></Route>
        </Routes>
       </BrowserRouter>
        </>
    )
}
export default Login_main;
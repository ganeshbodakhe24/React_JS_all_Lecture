import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";
import Users from "./Users";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './Global_css_active.css'
import Router_9_Nested_routing from "./Router_9_Nested_routing";
import Router_9_company from "./Router_9_company";
import Router_9_youtube from "./Router_9_youtube";
import Router_7_button_and_conditional_navigation from "./Router_7_button_and_conditional_navigation";
function Main(){
    return(
        <>
        <Router>
            <Nav></Nav>
            <Routes>
                <Route path="/about" element={<About></About>}></Route>
               <Route path="/contact" element={<Contact></Contact>}></Route>
               <Route path="/" extat={true} element={<Home></Home>}></Route>
               <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
               <Route path="/Router_7_button_and_conditional_navigation" element={<Router_7_button_and_conditional_navigation/>}></Route>

                {/* nested routing */}
               <Route path="/Route_9_Nested_Routing/" element={<Router_9_Nested_routing></Router_9_Nested_routing>}>
                    <Route path="youtube" element={<Router_9_youtube></Router_9_youtube>}/>
                    <Route path="company" element={<Router_9_company></Router_9_company>}/>
               </Route>

               {/*dynamic routing */}
               <Route path="/about/user/:id/:name" element={<Users></Users>}></Route> 
            </Routes>
        </Router>
        
        </>
    )
}
export default Main;
//search usrl with ? marks//key unique for each url// state which pass from link 
//home page have useLoation hook which give in for of state (hash, state,key,search,)
// nav contain style to nave and links connect
//contact contain (usesearchparams hook) use to send query params in url ex- http://localhost:3000/contact?name=gnaehs&age=33
//about and user for ( us useparams)
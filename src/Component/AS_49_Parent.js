
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AS_49_404_error from "./AS_49_404_not_found";
import AS_49_Index from "./AS_49_Index";
import AS_49_Nav from "./AS_49_Nav";
import AS_49_about from "./AS_49_about";
import AS_49_home from "./AS_49_home";

function AS_49_parents(){
    return(
        <>
        <Router>
            <AS_49_Nav></AS_49_Nav>
            <Routes>
                <Route path='/about' element={<AS_49_about></AS_49_about>}></Route>
                <Route path='/index' element={<AS_49_Index></AS_49_Index>}></Route>
                <Route path="/" element={<AS_49_home></AS_49_home>}></Route>
                <Route path="*" element={<AS_49_404_error/>}></Route>
                <Route></Route>
            </Routes>
        </Router>
        
        </>
    )
}
export default AS_49_parents;

import React from "react";
import AS_50_dynamic_routing_child from "./AS_50_dynaic_routing_child";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function AS_50_dynamic_routing_parent() {
    let users = [
        { id: 1, name: "Ganesh" },
        { id: 2, name: "Sham" },
        { id: 3, name: "geeta" }
    ]
    return (
        <>
        <Router>
            {
                users.map((item,i) => (
                    <div key={i}>   <Link to={"/AS_50_dynamic_routing_child/" + item.id+"/"+item.name}><h3>{item.name}</h3></Link>
                    </div>
                ))
            }
            <Routes>
                <Route path={"/AS_50_dynamic_routing_child/:id/:name"} element={<AS_50_dynamic_routing_child></AS_50_dynamic_routing_child>}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default AS_50_dynamic_routing_parent;
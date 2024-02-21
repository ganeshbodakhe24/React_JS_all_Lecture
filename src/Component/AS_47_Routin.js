import React from "react";
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function AS_47_Routing() {
  return (
    <Router>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/index">Index</Link>
        <br /> 
        <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Index" element={<Index></Index>} />
      </Routes>
      </Router>
  
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Index() {
  return <h1>Index Page</h1>;
}

export default AS_47_Routing;

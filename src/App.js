import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Partner from "./components/Partner";
import Login from "./components/Login";


import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
    {/* // </Home> */}
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/partners" element={<Partner></Partner>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>

    </HashRouter>
    </>
  )

}  
   

export default App;

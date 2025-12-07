import React from "react";
import ReactDOM from "react-dom/client";
import First from "./component/first";
import About from "./component/about";
import Navbar from "./component/navbar";
import {BrowserRouter,Routes,Route} from "react-router"
import Skills from "./component/skills";
import Contact from "./component/contact";
import Projects from "./component/projects";

export default function App(){
    return(
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<First></First>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Skills" element={<Skills></Skills>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Projects" element={<Projects></Projects>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
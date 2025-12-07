import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Projects from "./projects";

export default function First(){
    return(
        <div className="font-bold text-white">
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}
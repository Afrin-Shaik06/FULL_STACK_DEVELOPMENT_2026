import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Landing.css";

function Landing() {
    return(
        <>
        <Header />
        <main className="landing">
            <Home />
            <About />
            <Contact />
        </main>
        </>
    );
}
export default Landing;
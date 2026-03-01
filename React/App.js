import React, { useState } from "react";
import{BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Landing  from './Landing/Landing';
import Doctors from "./Doctors/Doctors";
import MessageDetails from "./Messages/MessagesDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogout = () => setIsLoggedIn(false); 
    return(
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    <Routes>
      <Route path = "/" element={<Landing/>}/>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path = "/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path = "/doctors" element={<Doctors/>}/>
      <Route path = "/messages/:id" element={<MessageDetails/>}/>
      
    </Routes>
    </Router>
  )
}

export default App;

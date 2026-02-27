import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return(
        <>
        <nav className = "navbar">
            <ul>
                <li><Link to = "/">Landing</Link></li>
                <li><Link to = "/home">Home</Link></li> 
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
                <li><Link to = "/doctors">Doctors</Link></li>
             {!isLoggedIn ? (
          <li><Link to="/login" onClick={() => setIsLoggedIn(true)}>Login</Link></li>
        ) : (
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        )}

            </ul>
        </nav>
        </>
    );
}

export default Navbar;
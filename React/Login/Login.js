import React, { useState } from "react";
import './Login.css';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <div className="login-container">
            <div className = "login-box">

                {isLoggedIn ? (
                    <>
                    <h1>Welcome!</h1>
                    <p>You are logged in as <b>{email}</b></p>
                    </>
                ) : (
                    <>
                    <h1>Welcome to KSRM</h1>
                    <h2>Login</h2>

            <form onSubmit = {handleSubmit}>
                <input
                type = "email"
                placeholder = "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required
                />
                <input 
                type = "password" 
                placeholder = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                required
                />
                <button type = "submit">Login</button>
            </form>
            <p className = "footer-text">Welcome to login page</p>
        </>
    )}
    </div>
    </div>
    );
}

export default Login;
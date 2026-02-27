import React from "react";
import { Link } from "react-router-dom";
import { messages} from "../Messages/MessagesData";
import "./Home.css";

function Home() {
    return (
        <div className = "home-container">
            <h1>Health Awareness</h1>
            <p>Your health is our priority</p>
        <div className = "message-grid">
            {messages.map(msg => (
                <Link to = {`/messages/${msg.id}`} key = {msg.id} className = "message-card">
                    <h3>{msg.title}</h3>
                    <p>{msg.short}</p>
                    <span>Read more </span>
                </Link>
            ))}
        </div>
    </div>
    )
}

export default Home;
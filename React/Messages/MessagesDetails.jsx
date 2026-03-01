import React from "react";
import { useParams } from "react-router-dom";
import { messages } from "./MessagesData";

function MessagesDetails() {
    const { id } = useParams();
    const message = messages.find(m => m.id === id);

    if (!message) return <h2>Message not found</h2>;

    return(
        <div style = {{ padding: "40px"}}>
            <h1>{message.title}</h1>
            <p>{message.full}</p>
            </div>
    );
}

export default MessagesDetails;
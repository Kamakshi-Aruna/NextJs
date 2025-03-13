"use client"; // This component runs in the browser

import { useState } from "react";
import { getMessage } from "../actions"; // Import server function

export default function ClientComponent() {
    const [message, setMessage] = useState("");

    async function fetchMessage() {
        const msg = await getMessage(); // Call the server function
        setMessage(msg);
    }

    return (
        <div>
            <h2>🌐 Client Component</h2>
            <button onClick={fetchMessage}>Get Server Message</button>
            <p>{message}</p>
        </div>
    );
}

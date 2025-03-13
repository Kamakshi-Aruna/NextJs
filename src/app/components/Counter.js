"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // State to store the count

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

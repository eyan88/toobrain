import { useState, useEffect } from "react";


const Timer = () => {
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count+1)

    }, 1000);
    return (
        <h1>{count}</h1>
    )
};

export default Timer;
import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0);
    const [incrementby,setIncrementBy] = useState(1);
    function increment(){
        setCount(count + incrementby);
    }
    function decrement(){
        setCount(count - incrementby);
    }
    function increaseIncrement(){
        setIncrementBy(incrementby + 1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementby - 1);
    }

    return (
        <div>
            <h1>Count value is :{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h1>We are incrementing the value by:{incrementby}</h1>
            <button onClick={increaseIncrement}>Increase Increment</button>
            <button onClick={decreaseIncrement}>Decrease Increment</button>
        </div>
    );
}
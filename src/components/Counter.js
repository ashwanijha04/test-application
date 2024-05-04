import React from "react";
import { useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0);


    return(
        <div>
            <h1> Counter: </h1>
            <h2> {count} </h2>
            <div>
                <button onClick={ () => {setCount(count-1)}}> -</button>
                <button onClick={ () => {setCount(count+1)}}> +</button>
            </div>
        </div>
    )
}
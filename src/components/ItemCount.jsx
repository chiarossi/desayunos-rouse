import React from "react";

export default function Contador({count, addMore, lessMore}) {
   
    return (
        <>
            <button onClick={() => lessMore()}>-</button>
            <p>{count}</p>
            <button onClick={() => addMore()}>+</button>
        </>
    );
}


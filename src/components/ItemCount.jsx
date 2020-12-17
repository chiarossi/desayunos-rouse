import React from "react";

export default function Contador({count, addMore, lessMore}) {
   
    return (
        <>
            <button onClick={() => addMore()}>+</button>
            <p>{count}</p>
            <button onClick={() => lessMore()}>-</button>
        </>
    );
}


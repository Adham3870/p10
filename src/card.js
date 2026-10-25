import React from "react";

function card ({items}){
    return(
        <>
        <div classNmae="card">
            <h2>product:{items.name}</h2>
            <h2>price:{items.price}</h2>
            </div></>
    );
}
export default card;

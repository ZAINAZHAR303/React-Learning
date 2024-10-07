import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

const ComponentF=({name})=>{


    return (
        
        <>
        <h1>Component F Rendered</h1> 
        <div>{name}</div>
        </>


    //   <div>
    //     <UserConsumer>
    //       {(username) => {
    //         return <h1>Hello {username}</h1>;
    //       }}
    //     </UserConsumer>
    //   </div>
    );
}

export default ComponentF;

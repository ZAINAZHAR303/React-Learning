import { render } from "@testing-library/react";
import React from "react";

const Hello = ()=>{
    // return(
    //     <div>
    //         <h1>hello again</h1>
    //     </div>
    // )

    return React.createElement("div",{id:"hello" ,className:"dummyclass"},React.createElement("h1",null,"hello again"))
}

export default Hello
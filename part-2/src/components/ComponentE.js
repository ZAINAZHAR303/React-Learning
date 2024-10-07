import React, { Component } from 'react'
import ComponentF from './ComponentF'
const ComponentE = ({name}) =>{
    return(
        <>
        <h1>Component E Rendered</h1>
        <ComponentF  name={name}/>
        </>
    )
}

export default ComponentE

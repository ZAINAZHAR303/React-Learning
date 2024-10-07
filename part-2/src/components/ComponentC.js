import React, { Component } from 'react'
import ComponentE from './ComponentE'

const ComponentC= ({name})=>{
    return(
        <>
            <h1>ComponentC rendered</h1>
            <ComponentE name={name}/>
        </>
    )
}

export default ComponentC

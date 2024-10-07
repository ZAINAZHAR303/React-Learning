import React from 'react'
import  ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal (
    <h3>
        Portal Demo
    </h3>,
    document.getElementById("PortalRoot")
  )
}

export default PortalDemo

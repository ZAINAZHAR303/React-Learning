import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Create />
    </>
  )
}

export default App

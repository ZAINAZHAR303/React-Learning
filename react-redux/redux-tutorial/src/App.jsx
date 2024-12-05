import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayProducts from './components/DisplayProducts'
import Create from './components/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
     <Create />
     <DisplayProducts />
    </>
  )
}

export default App

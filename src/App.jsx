import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weath from './componnent/weath'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Weath/>
    </>
  )
}

export default App

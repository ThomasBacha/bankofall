import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Form from './components/form'
import FullScreenBG from './components/background/FullScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <FullScreenBG>
      <Header />
      <Form />
      </FullScreenBG>
    </>
  )
}

export default App

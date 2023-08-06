import { useState } from 'react'
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

import './App.css'
import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'
import { useState } from 'react'

function App() {
  
  const [token, setToken] = useState(null)

  return (
    <>
      <Authenticate token={token}/>
      <SignUpForm setToken={setToken}/>
    </>
  )
}

export default App

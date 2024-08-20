import React from 'react'
import SignUp from './components/auth/SignUp'
import "./App.css"
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'

function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <AuthDetails/>
    </div>
  )
}

export default App

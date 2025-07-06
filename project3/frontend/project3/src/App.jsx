import { useState } from 'react'
import HomePage from './components/HomePage'
import './App.css'
import { BrowserRouter } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
}

export default App

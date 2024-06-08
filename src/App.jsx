import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game/Game'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'

function App() {


  return (
<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </>
  )
}

export default App

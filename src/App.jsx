import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <h2>Rich Sanches</h2>
        <div className="box-tags">
          <span>Status: Vivo</span>
          <span>Espécie: Humana</span>
          <span>Origem: terra C-137</span>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </div>
      </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerModal from './components/PlayerModal/PlayerModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Memory</h1>
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#playerModal">
          Exit Game
        </button>
      </nav>
      <PlayerModal />
    </>
  )
}

export default App

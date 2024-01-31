import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerModal from './components/PlayerModal/PlayerModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <nav >
        <h1 className="underline">Memory</h1>
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#playerModal">
          Exit Game
        </button>
      </nav> */}
      <nav className="flex justify-between items-center bg-dark p-4">
        <h1 className="mx-auto text-white">Memory</h1>
        <button >
          Exit Game
        </button>
      </nav>

      <PlayerModal />
    </>
  )
}

export default App

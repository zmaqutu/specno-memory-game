import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PlayerModal from './components/PlayerModal/PlayerModal';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans">
      {/* <nav >
        <h1 className="underline">Memory</h1>
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#playerModal">
          Exit Game
        </button>
      </nav> */}
      <nav className="flex justify-between items-center bg-dark p-4">
        <h1 className="text-white font-bold text-memory flex items-center">Memory</h1>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          Exit Game
        </button>
      </nav>

      {/* <PlayerModal /> */}
      <GameBoard />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerModal from './components/PlayerModal/PlayerModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlayerModal />
    </>
  )
}

export default App

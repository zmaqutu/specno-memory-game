import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlayerModal from "./components/PlayerModal/PlayerModal";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
    const [count, setCount] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [playerOneName, setPlayerOneName] = useState('');
	const [playerTwoName, setPlayerTwoName] = useState('');

    function toggleGameState() {
		setGameStarted((state) => !state);
	}

	function setPlayerNames(playerOne, playerTwo){
		setPlayerOneName(playerOne);
		setPlayerTwoName(playerTwo);
	}

	function exitGame(){
		setGameStarted(false);
	}
	return (
        <div className="font-sans h-screen flex flex-col">
            <nav className="flex justify-between items-center bg-dark p-4">
                <h1 className="text-white font-bold text-memory flex items-center">
                    Memory
                </h1>
                <button onClick={exitGame}className="bg-red-600 text-white py-2 px-4 rounded">
                    Exit Game
                </button>
            </nav>

            
			{ gameStarted ?
            	<GameBoard playerOneName={playerOneName} playerTwoName={playerTwoName}/>
				: <PlayerModal toggleGameState={toggleGameState} setPlayerNames={setPlayerNames} />
			}
        </div>
    );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlayerModal from "./components/PlayerModal/PlayerModal";
import GameBoard from "./components/GameBoard/GameBoard";
import { useSpring, a } from "@react-spring/web";
import cardImages from "./utils/cardImages";
import arrayShuffle from "array-shuffle";



function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");
	const [restartGame, setRestartGame] = useState(false);
    const [deck, setDeck] = useState(cardImages);

	// const [exitGame, setExitGame] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: gameStarted ? 1 : 0,
        transform: `perspective(600px) rotateY(${gameStarted ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    function toggleGameState() {
        setGameStarted((state) => !state);
    }

    function setPlayerNames(playerOne, playerTwo) {
        setPlayerOneName(playerOne);
        setPlayerTwoName(playerTwo);
    }

    function exitGame() {
        setGameStarted(false);
		setPlayerOneName("");
        setPlayerTwoName("");
    }

    function restartAndShuffle() {
        // setGameStarted(false);
        for (let i = [0]; i < deck.length; i++) {
                deck[i].isMatched = false;
        }
        shuffleDeck();
		setRestartGame(true);

        
    }

    /**
     * A function to shuffle the deck (numbers, suits, and Jokers)
     */
    function shuffleDeck() {
        const shuffledDeck = arrayShuffle(deck);
        setDeck(shuffledDeck);
    }


    return (
        <div className="font-sans h-screen flex flex-col">
            <nav className="grid grid-cols-3 items-center bg-opacity-50 place-items-center p-4">
                <div></div>
                <h1 className="text-white font-bold text-memory  place-items-center">
                    Memory
                </h1>
                <div className="justify-self-end">
                    {gameStarted ? (
                        <button
                            onClick={restartAndShuffle}
                            className="bg-orange-400 text-white py-2 px-4 rounded justify-self-end"
                        >
                            Restart Game
                        </button>
                    ) : null}
                    <button
                        onClick={exitGame}
                        className="bg-red-600 text-white py-2 px-4 ml-4 rounded "
                    >
                        Exit Game
                    </button>
                </div>
            </nav>
            {gameStarted ? (
                <GameBoard
                    deck={deck}
                    playerOneName={playerOneName}
                    playerTwoName={playerTwoName}
					restartGame={restartGame}
                    shuffleDeck={shuffleDeck}
                />
            ) : (
                <PlayerModal
                    toggleGameState={toggleGameState}
                    setPlayerNames={setPlayerNames}
                    shuffleDeck={shuffleDeck}
                />
            )}
            {/* <a.div className=" flex-shrink-0 z-10" style={{ opacity: opacity.to((o) => 1 - o), transform }}>
				<PlayerModal toggleGameState={toggleGameState} setPlayerNames={setPlayerNames} />
			</a.div>
            <a.div className="flex-shrink-0  mt-[-30%] will-change-[transform,opacity]" style={{ opacity, transform, rotateY: "180deg" }}>
				<GameBoard playerOneName={playerOneName} playerTwoName={playerTwoName} />
			</a.div> */}
        </div>
    );
}

export default App;

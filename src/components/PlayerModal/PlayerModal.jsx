import React, { useState} from "react";
import player1Image from '../../assets/images/player1.svg';
import player2Image from '../../assets/images/player2.svg';

function PlayerModal({toggleGameState, setPlayerNames}) {

	const [playerOneName, setPlayerOneName] = useState('');
	const [playerTwoName, setPlayerTwoName] = useState('');


	function handleStartButtonClick(){
		console.log('Start Game', playerOneName, playerTwoName);
		setPlayerNames(playerOneName, playerTwoName);
		toggleGameState();
	}
    return (
        <div className="grid grid-cols-4 items-center bg-opacity-50 place-items-center">
            <div className="bg-boardBackground rounded-lg" />
            <div className="w-full max-w-md col-span-2 ">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Are you ready to play?
                </h1>

                {/* Inputs in two columns */}
                <div className="grid grid-cols-2 gap-16 mb-4 ">
                    <div>
                        <img
                            src={player1Image}
                            alt="Player 1"
                            className="w-full h-auto"
                        />
                        <input
                            type="text"
                            placeholder="Name of player 1"
                            className="w-full p-2 rounded text-black"
							value={playerOneName}
							onChange={(e) => setPlayerOneName(e.target.value)}
                        />
                    </div>
                    <div>
						<img
							src={player2Image}
							alt="Player 2"
							className="w-full h-auto"
						/>
                        <input
                            type="text"
                            placeholder="Name of player 2"
                            className="w-full p-2 rounded text-black"
							value={playerTwoName}
							onChange={(e) => setPlayerTwoName(e.target.value)}

                        />
                    </div>
                </div>

                {/* Button at the center */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="bg-green-500 text-white py-2 px-4 rounded"
                        onClick={handleStartButtonClick}
                    >
                        Start Game
                    </button>
                </div>
            </div>
            <div className="bg-boardBackground rounded-lg" />
        </div>
    );
}

export default PlayerModal;

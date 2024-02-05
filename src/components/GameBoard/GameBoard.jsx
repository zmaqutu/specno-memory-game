import React, { useEffect, useRef, useState } from "react";
import player1Image from "../../assets/images/player1.svg";
import player2Image from "../../assets/images/player2.svg";
import Card from "../Card/Card";
import MatchConfetti from "./MatchConfetti";
function GameBoard({ playerOneName, playerTwoName, restartGame, deck, shuffleDeck}) {
    const [activeCardOne, setActiveCardOne] = useState(null);
    const [activeCardTwo, setActiveCardTwo] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(1); // 1 or 2
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    const suitColorMapping = {'Hearts': 'red', 'Diamonds': 'red', 'Clubs': 'black', 'Spades': 'black', 'Joker': 'joker'};

    useEffect(() => {
        // shuffleDeck();
        // set all cards in the deck to face down and not matched on unmount
        return () => {
            for (let i = [0]; i < deck.length; i++) {
                deck[i].isMatched = false;
            }
        };
    }, []);

	useEffect(() => {
		if(restartGame){
			// set both scores to zero
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
		}
    }, [restartGame]);

    useEffect(() => {
        // Check for card match when activeCardTwo is set
        if (activeCardTwo) {
            checkForMatch();
        }
    }, [activeCardTwo]);

    function selectedCard(card) {
        activeCardOne ? setActiveCardTwo(card) : setActiveCardOne(card);
    }

    function checkForMatch() {
        const cardOneRank = activeCardOne.split("_")[0];
        const cardTwoRank = activeCardTwo.split("_")[0];
        const cardOneColor = suitColorMapping[activeCardOne.split("_")[1]];
        const cardTwoColor = suitColorMapping[activeCardTwo.split("_")[1]];

        if ((cardOneRank === cardTwoRank && cardOneColor === cardTwoColor && activeCardOne !== activeCardTwo) ) {
            for (const card of deck) {
                if (card.name === activeCardOne || card.name === activeCardTwo) {
                    card.isMatched = true;
                }
            }
            if (currentPlayer === 1) {
                // Update player 1 score
                setPlayerOneScore((score) => score + 2);
            } else {
                // Update player 2 score
                setPlayerTwoScore((score) => score + 2);
            }
            setShowConfetti(true);
        }

        setActiveCardOne(null);
        setActiveCardTwo(null);

        if (playerOneScore + playerTwoScore === 54) {
            // Game over- print the winner
            console.log("Game Over");
            if (playerOneScore > playerTwoScore) {
                console.log(`${playerOneName} wins!`);
            } else if (playerOneScore < playerTwoScore) {
                console.log(`${playerTwoName} wins!`);
            }
        }
    }

    return (
        <div className="grid grid-cols-6 gap-4 items-center mx-auto h-full mb-10 flex-1 w-11/12 font-bold ">
            <div>
                <div className="bg-boardBackground rounded-lg text-xl">
                    <img
                        src={player1Image}
                        alt="Player 1"
                        className="w-full h-auto p-4"
                    />
                    {playerOneName ? <p>{playerOneName}</p> : <p>Player 1</p>}
                    Score: {playerOneScore}
                </div>
                {currentPlayer === 1 ? (
                    <button className="bg-green-600 font-bold text-white my-4 rounded">
                        It's Your Turn
                    </button>
                ) : (
                    <button className="font-bold text-blue-500 my-4 rounded invisible">
                        It's Your Turn
                    </button>
                )}
            </div>
            <div className="relative bg-boardBackground col-span-4 grid grid-cols-9 gap-1 place-items-center rounded-lg">
                {deck.map((cardImage, cardIndex) => (
                    <Card
                        key={cardIndex}
                        card={cardImage}
                        selectedCard={selectedCard}
                        isActive={
                            cardImage.name === activeCardOne ||
                            cardImage.name === activeCardTwo
                        }
                        isMatched={cardImage.isMatched}
                        showConfetti={showConfetti}
                    />
                ))}
                <MatchConfetti showConfetti={showConfetti} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setShowConfetti={setShowConfetti}/>
            </div>
            <div>
                <div className="bg-boardBackground rounded-lg text-xl">
                    <img
                        src={player2Image}
                        alt="Player 2"
                        className="w-full h-auto p-4"
                    />
                    {playerTwoName ? <p>{playerTwoName}</p> : <p>Player 2</p>}
                    Score: {playerTwoScore}
                </div>
                {currentPlayer === 2 ? (
                    <button className="bg-neutral-200 font-bold text-blue-500 my-4 rounded">
                        It's Your Turn
                    </button>
                ) : (
                    <button className="font-bold text-blue-500 my-4 rounded invisible">
                        It's Your Turn
                    </button>
                )}
            </div>
        </div>
    );
}

export default GameBoard;




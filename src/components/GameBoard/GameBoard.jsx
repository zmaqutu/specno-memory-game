import React, {useEffect, useRef, useState} from 'react';
import player1Image from '../../assets/images/player1.svg';
import player2Image from '../../assets/images/player2.svg';
import cardImages from '../../utils/cardImages';
import Card from '../Card/Card';
import arrayShuffle from 'array-shuffle';


function GameBoard({playerOneName, playerTwoName}) {

  const [deck, setDeck] = useState(cardImages);
  const [activeCardOne, setActiveCardOne] = useState(null);
  const [activeCardTwo, setActiveCardTwo] = useState(null);

  // a list of possible values for each suit
  const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const suits = ['Hearts','Clubs','Spades','Diamonds'];

  useEffect(() => {
    // shuffleDeck();
  }, []);

  useEffect(() => {
    // Check for card match when activeCardTwo is set
    if (activeCardTwo) {
      checkForMatch();
    }
  }, [activeCardTwo]);

  /**
   * A function to shuffle the deck (numbers, suits, and Jokers)
   */
  function shuffleDeck(){
    const shuffledDeck = arrayShuffle(deck);
    setDeck(shuffledDeck);
  }

  function selectedCard(card){
    activeCardOne ? setActiveCardTwo(card) : setActiveCardOne(card);

  }

  function checkForMatch(){
    if(activeCardOne.split('_')[0] === activeCardTwo.split('_')[0] && activeCardOne !== activeCardTwo){
      console.log('Match!');
      for(const card of deck){
        if(card.name === activeCardOne || card.name === activeCardTwo){
          card.isMatched = true;
        }
      }
    } else {
      console.log(activeCardOne + ' and ' + activeCardTwo + ' are not a match');
      // Flip the cards back over
    }
    setActiveCardOne(null);
    setActiveCardTwo(null);
  }
  console.log(activeCardOne, activeCardTwo);


  return (
    <div className="grid grid-cols-6 gap-4 items-center mx-auto h-full mb-10 flex-1 w-11/12 mt-autofont-bold ">
      <div className="bg-boardBackground rounded-lg">
        <img src={player1Image} alt="Player 1" className="w-full h-auto" />
        <p>{playerOneName}</p>
        <p>Score:</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded">
          It's your turn
        </button>
      </div>
      {/* Canvas */}
        <div className="bg-boardBackground col-span-4 grid grid-cols-9 gap-1 place-items-center rounded-lg">
        {deck.map((cardImage, cardIndex) => (
          // console.log(cardImage.name === activeCardOne || cardImage.name === activeCardTwo)
          <Card key={cardIndex} card={cardImage} selectedCard={selectedCard} isActive={cardImage.name === activeCardOne || cardImage.name === activeCardTwo} isMatched={cardImage.isMatched} />
        ))}
        </div>
      <div className="bg-boardBackground rounded-lg">
        <img src={player2Image} alt="Player 2" className="w-full h-auto" />
        <p>{playerTwoName}</p>
        <p>Score:</p>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          It's your turn
        </button>
      </div>
    </div>
  )
}

export default GameBoard;
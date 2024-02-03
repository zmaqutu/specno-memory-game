import React, {useEffect, useRef, useState} from 'react';
import player1Image from '../../assets/images/player1.svg';
import player2Image from '../../assets/images/player2.svg';
import cardImages from '../../utils/cardImages';
import Card from '../Card/Card';
import arrayShuffle from 'array-shuffle';


function GameBoard() {

  const [deck, setDeck] = useState(cardImages);

  // a list of possible values for each suit
  const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const suits = ['Hearts','Clubs','Spades','Diamonds'];

  useEffect(() => {
    shuffleDeck();
  }
  , []);

  /**
   * A function to shuffle the deck (numbers, suits, and Jokers)
   */
  function shuffleDeck(){
    const shuffledDeck = arrayShuffle(deck);
    setDeck(shuffledDeck);
  }

  return (
    <div className="grid grid-cols-6 gap-4 items-center mx-auto h-full mb-10 flex-1 w-11/12 mt-autofont-bold ">
      <div className="bg-boardBackground rounded-lg">
        <img src={player1Image} alt="Player 1" className="w-full h-auto" />
        <p>Player 1</p>
        <p>Score:</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded">
          It's your turn
        </button>
      </div>
      {/* Canvas */}
        <div className="bg-boardBackground col-span-4 grid grid-cols-9 gap-1 place-items-center rounded-lg">
        {deck.map((cardImage, cardIndex) => (
          <Card key={cardIndex} card={cardImage} />
        ))}
        </div>
      <div className="bg-boardBackground rounded-lg">
        <img src={player2Image} alt="Player 2" className="w-full h-auto" />
        <p>Player 2</p>
        <p>Score:</p>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          It's your turn
        </button>
      </div>
    </div>
  )
}

export default GameBoard

/*import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import styles from './styles.module.css'

export default function App() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
}*/
import React, {useRef, useState} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import player1Image from '../../assets/images/player1.svg';
import player2Image from '../../assets/images/player2.svg';
import Card from '../Card/Card';

function GameBoard() {

  const width = window.innerWidth;
	const height = window.innerHeight;
  const cameraPosition = useRef([0,0,100]);
  const cardWidth = 50;
  const cardHeight = 70;
  const numCards = 9;

  const [deck, setDeck] = useState({})

 
  // a list of possible values for each suit
  const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const suits = ['Hearts','Clubs','Spades','Diamonds'];

  /**
   * A function to initialize the deck (numbers, suits, and Jokers)
   */
  function initializeDeck(){

    const tempDeck = {};

    for(let i = 0; i < suits.length;i++){
      tempDeck[suits[i]] = cardValues;
    }
    console.log(tempDeck);
  }

  const cards = Array.from({ length: 54 }, (_, index) => index + 1);


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
        {cards.map((card) => (
          <Card key={card} card={card} />
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
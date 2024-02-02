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

  // Calculate the horizontal gap between cards
  const horizontalGap = (633.265625 - ( cardWidth * numCards)) / (numCards + 1);
  console.log(horizontalGap);
  // initializeDeck();

  // memoize positions for each neuron in each layer
//   const cardPositions = useMemo(() => {
//     const positions = []
//     for (let row = -210; row < 210; row += 15) {
//             for (let col = -210; col < 210; col += 15) {
//                     positions.push(new THREE.Vector3(col, -1, row))
//             }
//     }
//     return positions
// }, []);

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


  return (
    <div className="grid grid-cols-6 gap-4 items-center mx-auto h-full mb-10 flex-1 overflow-hidden w-11/12  mt-auto  bg-green-500 font-bold">
      <div className="bg-red-400">
        <img src={player1Image} alt="Player 1" className="w-full h-auto" />
        <p>Player 1</p>
        <p>Score:</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded">
          It's your turn
        </button>
      </div>
        <Canvas className="bg-green-900 col-span-4" orthographic camera = {{ position: cameraPosition.current, fov: 53, aspect: width / height, near: 1, far: 5000 }}>
          <ambientLight />
          {/* Horizontal Cards */}
          <Card cardPosition={[-275,210,10]}/>
          <Card cardPosition={[-205,210,10]}/>
          <Card cardPosition={[-135,210,10]}/>
          <Card cardPosition={[-65,210,10]}/>
          <Card cardPosition={[5,210,10]}/>
          <Card cardPosition={[75,210,10]}/>
          <Card cardPosition={[140,210,10]}/>
          <Card cardPosition={[207.5,210,10]}/>
          <Card cardPosition={[275,210,10]}/>

          {/* Vertical Card positions */}
          <Card cardPosition={[-275,127.5,10]}/>
          <Card cardPosition={[-275,45,10]}/>
          <Card cardPosition={[-275,-37.5,10]}/>
          <Card cardPosition={[-275,-120,10]}/>
          <Card cardPosition={[-275,-202.5,10]}/>


          {/* <OrbitControls /> */}
        </Canvas>
      <div className="bg-yellow-400">
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
import React, {useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import player1Image from '../../assets/images/player1.svg';
import player2Image from '../../assets/images/player2.svg';

function GameBoard() {

  const width = window.innerWidth;
	const height = window.innerHeight;
  const cameraPosition = useRef([0,0,275]);


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
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <planeGeometry args={[100, 100, 100]} />
            <meshStandardMaterial side={THREE.DoubleSide} color={'orange'} />
          </mesh>
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
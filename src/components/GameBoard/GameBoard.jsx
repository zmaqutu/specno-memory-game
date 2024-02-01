import React, {useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GameBoard() {

  const width = window.innerWidth;
	const height = window.innerHeight;
  const cameraPosition = useRef([0,0,275]);


  return (
    <div className="grid grid-cols-3 items-center mx-auto max-h-screen w-11/12  mt-auto mb-10 bg-green-500">
      <div className="bg-red-400">Player 1 Score</div>
      <div className="bg-green-900">
        <h1>Canvas</h1>
        {/* <Canvas orthographic camera = {{ position: cameraPosition.current, fov: 53, aspect: width / height, near: 1, far: 5000 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <planeGeometry args={[100, 100, 100]} />
            <meshStandardMaterial side={THREE.DoubleSide} color={'orange'} />
          </mesh>
          <OrbitControls />
        </Canvas> */}
      </div>
      <div className="bg-yellow-400 ">Player 2 Score</div>
    </div>
  )
}

export default GameBoard
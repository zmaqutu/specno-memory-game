import React, { useRef } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';
import {  useThree } from '@react-three/fiber';



function Card(props) {

  // define card Geometry and card material - material will be based on props
  const cardGometry = new THREE.PlaneGeometry(50,70);
  const cardMaterial = new THREE.MeshStandardMaterial({ color: 'black', side: THREE.DoubleSide});

  const {cameram, gl} = useThree();
  const canvasSize = new THREE.Vector2();
  // console.log('renderer size', gl.getSize(canvasSize))


  const cardMesh = new THREE.Mesh(cardGometry,cardMaterial);

  // create a reference to the mesh
  const cardRef = useRef();

  return (
    <primitive ref={cardRef} object={cardMesh} position={props.cardPosition}/>
  )
}

export default Card
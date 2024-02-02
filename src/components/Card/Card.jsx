import React, { useRef } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';


function Card(props) {

  // define card Geometry and card material - material will be based on props
  const cardGometry = new THREE.PlaneGeometry(50,70);
  const cardMaterial = new THREE.MeshStandardMaterial({ color: 'lightblue', side: THREE.DoubleSide});

  const cardMesh = new THREE.Mesh(cardGometry,cardMaterial);

  // create a reference to the mesh
  const cardRef = useRef();

  return (
    <primitive ref={cardRef} object={cardMesh} position={[-270,210,10]}/>
  )
}

export default Card
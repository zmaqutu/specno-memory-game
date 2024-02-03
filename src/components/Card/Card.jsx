import React, { useRef } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';
import cardBack from '../../assets/images/cardBack.svg';



function Card(props) {

  // create a reference to the mesh
  const cardRef = useRef();

  return (
    <div className="p-1 w-4/6">
      <img src={cardBack} alt=""  />
    </div>
  )
}

export default Card
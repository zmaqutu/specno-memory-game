import React, { useRef, useState } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';
import cardBack from '../../assets/images/cardBack.svg';
import Joker_2 from '../../assets/images/cards/Joker_2.svg';
import { useSpring, a } from '@react-spring/web'




function Card(props) {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="p-1 w-4/6 flex" onClick={() => set(state => !state)}>
      <a.img src={cardBack} className="flex-shrink-0" alt="" style={{ opacity: opacity.to(o => 1 - o), transform }}/>
      <a.img src={props.card.imageSrc} className="flex-shrink-0 ml-[-100%] will-change-[transform,opacity]" alt="" style={{ opacity, transform, rotateX: '180deg'}} />
    </div>
  )
}

export default Card
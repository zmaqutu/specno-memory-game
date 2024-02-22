import React, { useEffect, useRef, useState } from "react";
import cardBack from "../../assets/images/cardBack.svg";
import { useSpring, a } from "@react-spring/web";
import useMeasure from 'react-use-measure'


function Card({ card, selectedCard, cardIndex, isActive, isMatched, showConfetti, updateCardBounds }) {
    const [flipped, toggleFlipped] = useState(false);

    const [ref, bounds] = useMeasure();

    const cardRank = card.name;

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const { matchedCardAnimation } = useSpring({
        matchedCardAnimation: flipped ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 2000 },
    });

    function handleSelectedCard() {
        if (flipped) return;
        toggleFlipped((state) => !state);
        selectedCard(cardRank);
    }

    useEffect(() => {
        setTimeout(() => {
            if (!isActive && !isMatched) {
                toggleFlipped((state) => false);
            } else if (isMatched) {
                // toggleFlipped(state => false);
            }
        }, 1250);
    }, [isActive, isMatched]);

    // update the bounds in the parent component when they change
    useEffect(() => {
        // measure(bounds, cardIndex);
        updateCardBounds(cardIndex, bounds.x,bounds.y)
        if(cardIndex === 53) {
            // console.log('bounds from Card', bounds.x, bounds.y)
        }
    
        // console.log('boundsChanged')
    }, [bounds]);

    
    return (
        <a.div ref={ref} className={`${ showConfetti ? 'invisible' : 'visible'} p-1 w-4/6 flex`} onClick={handleSelectedCard}>
            <a.img
                src={cardBack}
                className="flex-shrink-0 will-change-[transform,opacity]"
                alt=""
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.img
                src={card.imageSrc}
                className="flex-shrink-0 ml-[-100%] will-change-[transform,opacity]"
                alt=""
                style={
                    isMatched
                        ? { opacity: matchedCardAnimation.to((o) => 1 - o)}
                        : { opacity, transform, rotateX: "180deg" }
                }
            />
        </a.div>
    );
}

export default Card;

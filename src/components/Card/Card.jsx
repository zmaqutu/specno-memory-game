import React, { useEffect, useRef, useState } from "react";
import cardBack from "../../assets/images/cardBack.svg";
import { useSpring, a } from "@react-spring/web";

function Card({ card, selectedCard, isActive, isMatched }) {
    const [flipped, toggleFlipped] = useState(false);

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
                console.log("Matched cad!");
                // toggleFlipped(state => true);
            }
        }, 1250);
    }, [isActive, isMatched]);

    return (
        <div className="p-1 w-4/6 flex" onClick={handleSelectedCard}>
            <a.img
                src={cardBack}
                className="flex-shrink-0"
                alt=""
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.img
                src={card.imageSrc}
                className="flex-shrink-0 ml-[-100%] will-change-[transform,opacity]"
                alt=""
                style={
                    isMatched
                        ? { opacity: matchedCardAnimation.to((o) => 0.5 - o) }
                        : { opacity, transform, rotateX: "180deg" }
                }
            />
        </div>
    );
}

export default Card;

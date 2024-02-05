import React, { useEffect } from "react";
import matchConfetti from "../../assets/images/matchConfetti.svg";
import Confetti from "react-confetti";
import { useSpring, a } from "@react-spring/web";

function MatchConfetti({ showConfetti, setShowConfetti, currentPlayer, setCurrentPlayer}) {
    const { confettiAnimation } = useSpring({
        confettiAnimation: showConfetti ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 2000 },
    });
    const fadeIn = useSpring({
        opacity: showConfetti ? 1 : 0,
        from: { opacity: 0 },
        onRest: () => {
            if (!showConfetti) {
                setShowConfetti(false);
                setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            }
        },
    });
    return (
        <>
            <a.div
                style={{
                    ...fadeIn,
                    pointerEvents: showConfetti ? "auto" : "none",
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="rounded-l text-xl h-full w-full">
                    <img
                        src={matchConfetti}
                        alt="Match Confetti"
                        className="h-full w-full object-cover"
                    />
                    {showConfetti && (
                        <Confetti
                            className="h-full w-full"
                            recycle={false}
                            numberOfPieces={800}
                            onConfettiComplete={() => setShowConfetti(false)}
                        />
                    )}
                </div>
            </a.div>
        </>
    );
}

export default MatchConfetti;

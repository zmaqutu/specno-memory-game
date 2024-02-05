import React, { useEffect } from "react";
import matchConfetti from "../../assets/images/matchConfetti.svg";

function MatchConfetti({ showConfetti, setShowConfetti }) {
	console.log('showConfetti', showConfetti);
	useEffect(() => {
		if (showConfetti) {
			const timer = setTimeout(() => {
				setShowConfetti(false);
			}
			, 3000);
			return () => clearTimeout(timer);
		}
	}, [showConfetti]);
    return (
        <>
            {showConfetti ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-l text-xl h-full w-full">
                        <img
                            src={matchConfetti}
                            alt="Match Confetti"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default MatchConfetti;

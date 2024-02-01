import React from 'react'

function PlayerModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">Are you ready to play?</h1>

        {/* Inputs in two columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Name of player 1"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Name of player 2"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Button at the center */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => console.log('Start Game')}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal;
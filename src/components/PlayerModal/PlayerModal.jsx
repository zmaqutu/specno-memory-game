import React from 'react'

function PlayerModal() {
  return (
    <>
      <h1>Are you ready to play?</h1>
      <input type="text" placeholder="Name of player 1" />
      <input type="text" placeholder="Name of player 2" />
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Start Game</button>
    </>
  );
}

export default PlayerModal;
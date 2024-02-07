<h1 align="center">Specno Fullstack Developer Technical Assessment - Memory Game </h1>

<div align="center" >
  <img src="https://img.shields.io/badge/made%20by-Zongo%20Maqutu-blue?style=for-the-badge&labelColor=20232a" />
  <img src="https://img.shields.io/badge/Javascript-20232a?style=for-the-badge&logo=javascript&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Tailwind CSS-20232a?style=for-the-badge&logo=tailwindcss&labelColor=162e16" />
  <img src="https://img.shields.io/badge/React JS-20232a?style=for-the-badge&logo=react&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Vite-20232a?style=for-the-badge&logo=vite&labelColor=2e2f38" />
</div>

**Objective**

_Memory (also known as Concentration) is a card game played with one or more players. Using a standard card deck (including both jokers) the players shuffle the deck and lay all of the cards face down on a surface and two cards are flipped face up over each turn. The objective of the game is to turn over pairs of matching cards.._

## Rules of the Game

Your challenge is to build Memory adhering to the rules of the game listed below:

1. The game should consist of 2 players
2. Only 1 player can play at a time.
3. Shuffle the deck of cards
4. Display all 54 cards (jokers included) face down
5. Clicking the back of a card should turn a card over
6. Player can turn over 2 cards at a time
7. When two cards are turned over:
    1. If the number and color of the cards match, the player collects the pair and the cards are removed from the board
    2. If the cards do not match, they are turned back over and remain in position
8. The players with the most cards wins

## Try the game

A live interactive demo can be found [here](https://zmaqutu.github.io/specno-memory-game).

## Project Setup and Installation

Before running the application, make sure you have Node.js installed on your machine.

Use the following command to install dependencies:

```bash
npm install
```

## Running the Application locally

Once the dependencies are installed, you can start the development server using the following command:

```bash
npm run dev
```

## Features

### Card Flip Animations

-   When interacting with a card by clicking, the user triggers an animation effect. This animation utilizes the capabilities of the React Spring library to smoothly transition the card's appearance, employing both opacity and rotation animations for a visually engaging experience.

### Confetti explosion on card match

-   When a player successfully matches a pair of cards or emerges as the winner of the game, a celebratory confetti animation is triggered, adding a festive touch to the gameplay experience.

### Card shuffle animation

-   When the user chooses to restart the game, an animated shuffling effect is applied to the cards, enhancing the visual appeal and providing an engaging transition as the game resets.

### Libraries used

-   React.js
-   Tailwind CSS
-   React Spring
-   Vite

## Future Scope

-   Implement online play capabilities to enable multiplayer matches and competitions.
-   Introduce an in-game chat feature to facilitate communication between players during gameplay.
-   Develop a leaderboard feature to track high scores and player rankings.
-   Enhance the user interface with customizable themes or card designs.
-   Incorporate sound effects and background music to enhance the gaming experience.
-   Implement an undo feature to allow players to reverse their last move.
-   Introduce power-up cards or special abilities that can be used strategically during gameplay.
-   Explore the possibility of integrating virtual reality (VR) support for an immersive gaming experience.
-   Develop a mobile app version of the game to reach a wider audience and enable on-the-go gameplay.
-   Implement social media integration to allow players to share their achievements and progress with friends.
-   Create a tutorial or interactive guide to help new players learn the game mechanics and strategies.

<p align="center">Made with ❤️ in React JS</p>

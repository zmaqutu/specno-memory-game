// import all the card images from assets/images/cards
// and export them as an array
import A_Spades from '../assets/images/cards/A_Spades.svg';
import A_Hearts from '../assets/images/cards/A_Hearts.svg';
import A_Diamonds from '../assets/images/cards/A_Diamonds.svg';
import A_Clubs from '../assets/images/cards/A_Clubs.svg';
import K_Spades from '../assets/images/cards/K_Spades.svg';
import K_Hearts from '../assets/images/cards/K_Hearts.svg';
import K_Diamonds from '../assets/images/cards/K_Diamonds.svg';
import K_Clubs from '../assets/images/cards/K_Clubs.svg';
import Q_Spades from '../assets/images/cards/Q_Spades.svg';
import Q_Hearts from '../assets/images/cards/Q_Hearts.svg';
import Q_Diamonds from '../assets/images/cards/Q_Diamonds.svg';
import Q_Clubs from '../assets/images/cards/Q_Clubs.svg';
import J_Spades from '../assets/images/cards/J_Spades.svg';
import J_Hearts from '../assets/images/cards/J_Hearts.svg';
import J_Diamonds from '../assets/images/cards/J_Diamonds.svg';
import J_Clubs from '../assets/images/cards/J_Clubs.svg';
import Ten_Spades from '../assets/images/cards/10_Spades.svg';
import Ten_Hearts from '../assets/images/cards/10_Hearts.svg';
import Ten_Diamonds from '../assets/images/cards/10_Diamonds.svg';
import Ten_Clubs from '../assets/images/cards/10_Clubs.svg';
import Nine_Spades from '../assets/images/cards/9_Spades.svg';
import Nine_Hearts from '../assets/images/cards/9_Hearts.svg';
import Nine_Diamonds from '../assets/images/cards/9_Diamonds.svg';
import Nine_Clubs from '../assets/images/cards/9_Clubs.svg';
import Eight_Spades from '../assets/images/cards/8_Spades.svg';
import Eight_Hearts from '../assets/images/cards/8_Hearts.svg';
import Eight_Diamonds from '../assets/images/cards/8_Diamonds.svg';
import Eight_Clubs from '../assets/images/cards/8_Clubs.svg';
import Seven_Spades from '../assets/images/cards/7_Spades.svg';
import Seven_Hearts from '../assets/images/cards/7_Hearts.svg';
import Seven_Diamonds from '../assets/images/cards/7_Diamonds.svg';
import Seven_Clubs from '../assets/images/cards/7_Clubs.svg';
import Six_Spades from '../assets/images/cards/6_Spades.svg';
import Six_Hearts from '../assets/images/cards/6_Hearts.svg';
import Six_Diamonds from '../assets/images/cards/6_Diamonds.svg';
import Six_Clubs from '../assets/images/cards/6_Clubs.svg';
import Five_Spades from '../assets/images/cards/5_Spades.svg';
import Five_Hearts from '../assets/images/cards/5_Hearts.svg';
import Five_Diamonds from '../assets/images/cards/5_Diamonds.svg';
import Five_Clubs from '../assets/images/cards/5_Clubs.svg';
import Four_Spades from '../assets/images/cards/4_Spades.svg';
import Four_Hearts from '../assets/images/cards/4_Hearts.svg';
import Four_Diamonds from '../assets/images/cards/4_Diamonds.svg';
import Four_Clubs from '../assets/images/cards/4_Clubs.svg';
import Three_Spades from '../assets/images/cards/3_Spades.svg';
import Three_Hearts from '../assets/images/cards/3_Hearts.svg';
import Three_Diamonds from '../assets/images/cards/3_Diamonds.svg';
import Three_Clubs from '../assets/images/cards/3_Clubs.svg';
import Two_Spades from '../assets/images/cards/2_Spades.svg';
import Two_Hearts from '../assets/images/cards/2_Hearts.svg';
import Two_Diamonds from '../assets/images/cards/2_Diamonds.svg';
import Two_Clubs from '../assets/images/cards/2_Clubs.svg';
import Joker_1 from '../assets/images/cards/Joker_1.svg';
import Joker_2 from '../assets/images/cards/Joker_2.svg';

const cardImages = [
    {name: 'A_Spades', imageSrc: A_Spades, isMatched: false},
    {name: 'A_Hearts', imageSrc: A_Hearts, isMatched: false},
    {name: 'A_Diamonds', imageSrc: A_Diamonds, isMatched: false},
    {name: 'A_Clubs', imageSrc: A_Clubs, isMatched: false},
    {name: 'K_Spades', imageSrc: K_Spades, isMatched: false},
    {name: 'K_Hearts', imageSrc: K_Hearts, isMatched: false},
    {name: 'K_Diamonds', imageSrc: K_Diamonds, isMatched: false},
    {name: 'K_Clubs', imageSrc: K_Clubs, isMatched: false},
    {name: 'Q_Spades', imageSrc: Q_Spades, isMatched: false},
    {name: 'Q_Hearts', imageSrc: Q_Hearts, isMatched: false},
    {name: 'Q_Diamonds', imageSrc: Q_Diamonds, isMatched: false},
    {name: 'Q_Clubs', imageSrc: Q_Clubs, isMatched: false},
    {name: 'J_Spades', imageSrc: J_Spades, isMatched: false},
    {name: 'J_Hearts', imageSrc: J_Hearts, isMatched: false},
    {name: 'J_Diamonds', imageSrc: J_Diamonds, isMatched: false},
    {name: 'J_Clubs', imageSrc: J_Clubs, isMatched: false},
    {name: '10_Spades', imageSrc: Ten_Spades, isMatched: false},
    {name: '10_Hearts', imageSrc: Ten_Hearts, isMatched: false},
    {name: '10_Diamonds', imageSrc: Ten_Diamonds, isMatched: false},
    {name: '10_Clubs', imageSrc: Ten_Clubs, isMatched: false},
    {name: '9_Spades', imageSrc: Nine_Spades, isMatched: false},
    {name: '9_Hearts', imageSrc: Nine_Hearts, isMatched: false},
    {name: '9_Diamonds', imageSrc: Nine_Diamonds, isMatched: false},
    {name: '9_Clubs', imageSrc: Nine_Clubs, isMatched: false},
    {name: '8_Spades', imageSrc: Eight_Spades, isMatched: false},
    {name: '8_Hearts', imageSrc: Eight_Hearts, isMatched: false},
    {name: '8_Diamonds', imageSrc: Eight_Diamonds, isMatched: false},
    {name: '8_Clubs', imageSrc: Eight_Clubs, isMatched: false},
    {name: '7_Spades', imageSrc: Seven_Spades, isMatched: false},
    {name: '7_Hearts', imageSrc: Seven_Hearts, isMatched: false},
    {name: '7_Diamonds', imageSrc: Seven_Diamonds, isMatched: false},
    {name: '7_Clubs', imageSrc: Seven_Clubs, isMatched: false},
    {name: '6_Spades', imageSrc: Six_Spades, isMatched: false},
    {name: '6_Hearts', imageSrc: Six_Hearts, isMatched: false},
    {name: '6_Diamonds', imageSrc: Six_Diamonds, isMatched: false},
    {name: '6_Clubs', imageSrc: Six_Clubs, isMatched: false},
    {name: '5_Spades', imageSrc: Five_Spades, isMatched: false},
    {name: '5_Hearts', imageSrc: Five_Hearts, isMatched: false},
    {name: '5_Diamonds', imageSrc: Five_Diamonds, isMatched: false},
    {name: '5_Clubs', imageSrc: Five_Clubs, isMatched: false},
    {name: '4_Spades', imageSrc: Four_Spades, isMatched: false},
    {name: '4_Hearts', imageSrc: Four_Hearts, isMatched: false},
    {name: '4_Diamonds', imageSrc: Four_Diamonds, isMatched: false},
    {name: '4_Clubs', imageSrc: Four_Clubs, isMatched: false},
    {name: '3_Spades', imageSrc: Three_Spades, isMatched: false},
    {name: '3_Hearts', imageSrc: Three_Hearts, isMatched: false},
    {name: '3_Diamonds', imageSrc: Three_Diamonds, isMatched: false},
    {name: '3_Clubs', imageSrc: Three_Clubs, isMatched: false},
    {name: '2_Spades', imageSrc: Two_Spades, isMatched: false},
    {name: '2_Hearts', imageSrc: Two_Hearts, isMatched: false},
    {name: '2_Diamonds', imageSrc: Two_Diamonds, isMatched: false},
    {name: '2_Clubs', imageSrc: Two_Clubs, isMatched: false},
    {name: 'Joker_1', imageSrc: Joker_1, isMatched: false},
    {name: 'Joker_2', imageSrc: Joker_2, isMatched: false},
];


export default cardImages;
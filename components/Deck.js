// const deck = [
//     { images:"../assets/cards/6_of_hearts.png", rank: '6', suit: 'Gyzyl', value: 0 },
//     { images:"../assets/cards/7_of_hearts.png", rank: '7', suit: 'Gyzyl', value: 0 },
//     { images:"../assets/cards/8_of_hearts.png", rank: '8', suit: 'Gyzyl', value: 0 },
//     { images:"../assets/cards/9_of_hearts.png", rank: '9', suit: 'Gyzyl', value: 0 },
//     { images:"../assets/cards/10_of_hearts.png", rank: '10', suit: 'Gyzyl', value: 10 },
//     { images:"../assets/cards/jack_of_hearts2.png", rank: 'J', suit: 'Gyzyl', value: 2 },
//     { images:"../assets/cards/queen_of_hearts2.png", rank: 'Q', suit: 'Gyzyl', value: 3 },
//     { images:"../assets/cards/king_of_hearts2.png", rank: 'K', suit: 'Gyzyl', value: 4 },
//     { images:"../assets/cards/ace_of_hearts.png", rank: 'A', suit: 'Gyzyl', value: 11 },
//     // Добавляем остальные масти и карты...
//     { images:"../assets/cards/6_of_spades.png", rank: '6', suit: 'Gara', value: 0 },
//     { images:"../assets/cards/7_of_spades.png", rank: '7', suit: 'Gara', value: 0 },
//     { images:"../assets/cards/8_of_spades.png", rank: '8', suit: 'Gara', value: 0 },
//     { images:"../assets/cards/9_of_spades.png", rank: '9', suit: 'Gara', value: 0 },
//     { images:"../assets/cards/10_of_spades.png", rank: '10', suit: 'Gara', value: 10 },
//     { images:"../assets/cards/jack_of_spades2.png", rank: 'J', suit: 'Gara', value: 2 },
//     { images:"../assets/cards/queen_of_spades2.png", rank: 'Q', suit: 'Gara', value: 3 },
//     { images:"../assets/cards/king_of_spades2.png", rank: 'K', suit: 'Gara', value: 4 },
//     { images:"../assets/cards/ace_of_spades.png", rank: 'A', suit: 'Gara', value: 11 },
//     // Добавляем остальные масти и карты...

//     { images:"../assets/cards/6_of_diamonds.png", rank: '6', suit: 'Kerpic', value: 0 },
//     { images:"../assets/cards/7_of_diamonds.png", rank: '7', suit: 'Kerpic', value: 0 },
//     { images:"../assets/cards/8_of_diamonds.png", rank: '8', suit: 'Kerpic', value: 0 },
//     { images:"../assets/cards/9_of_diamonds.png", rank: '9', suit: 'Kerpic', value: 0 },
//     { images:"../assets/cards/10_of_diamonds.png", rank: '10', suit: 'Kerpic', value: 10 },
//     { images:"../assets/cards/jack_of_diamonds2.png", rank: 'J', suit: 'Kerpic', value: 2 },
//     { images:"../assets/cards/queen_of_diamonds2.png", rank: 'Q', suit: 'Kerpic', value: 3 },
//     { images:"../assets/cards/king_of_diamonds2.png", rank: 'K', suit: 'Kerpic', value: 4 },
//     { images:"../assets/cards/ace_of_diamonds.png", rank: 'A', suit: 'Kerpic', value: 11 },
//     // Добавляем остальные масти и карты...

//     { images:"../assets/cards/6_of_clubs.png", rank: '6', suit: 'Jitti', value: 0 },
//     { images:"../assets/cards/7_of_clubs.png", rank: '7', suit: 'Jitti', value: 0 },
//     { images:"../assets/cards/8_of_clubs.png", rank: '8', suit: 'Jitti', value: 0 },
//     { images:"../assets/cards/9_of_clubs.png", rank: '9', suit: 'Jitti', value: 0 },
//     { images:"../assets/cards/10_of_clubs.png", rank: '10', suit: 'Jitti', value: 10 },
//     { images:"../assets/cards/jack_of_clubs2.png", rank: 'J', suit: 'Jitti', value: 2 },
//     { images:"../assets/cards/queen_of_clubs2.png", rank: 'Q', suit: 'Jitti', value: 3 },
//     { images:"../assets/cards/king_of_clubs2.png", rank: 'K', suit: 'Jitti', value: 4 },
//     { images:"../assets/cards/ace_of_clubs.png", rank: 'A', suit: 'Jitti', value: 11 },
//   ];
  
//   export const shuffleDeck = (deck) => {
//     return deck.sort(() => Math.random() - 0.5);
//   };
  
//   export default deck;
  
const deck = [
  { images: require("../assets/cards/6_of_hearts.png"), rank: '6', suit: 'Gyzyl', value: 0 },
  { images: require("../assets/cards/7_of_hearts.png"), rank: '7', suit: 'Gyzyl', value: 0 },
  { images: require("../assets/cards/8_of_hearts.png"), rank: '8', suit: 'Gyzyl', value: 0 },
  { images: require("../assets/cards/9_of_hearts.png"), rank: '9', suit: 'Gyzyl', value: 0 },
  { images: require("../assets/cards/10_of_hearts.png"), rank: '10', suit: 'Gyzyl', value: 10 },
  { images: require("../assets/cards/jack_of_hearts2.png"), rank: 'J', suit: 'Gyzyl', value: 2 },
  { images: require("../assets/cards/queen_of_hearts2.png"), rank: 'Q', suit: 'Gyzyl', value: 3 },
  { images: require("../assets/cards/king_of_hearts2.png"), rank: 'K', suit: 'Gyzyl', value: 4 },
  { images: require("../assets/cards/ace_of_hearts.png"), rank: 'A', suit: 'Gyzyl', value: 11 },
  // Остальные карты...
  { images: require("../assets/cards/6_of_spades.png"), rank: '6', suit: 'Gara', value: 0 },
  { images: require("../assets/cards/7_of_spades.png"), rank: '7', suit: 'Gara', value: 0 },
  { images: require("../assets/cards/8_of_spades.png"), rank: '8', suit: 'Gara', value: 0 },
  { images: require("../assets/cards/9_of_spades.png"), rank: '9', suit: 'Gara', value: 0 },
  { images: require("../assets/cards/10_of_spades.png"), rank: '10', suit: 'Gara', value: 10 },
  { images: require("../assets/cards/jack_of_spades2.png"), rank: 'J', suit: 'Gara', value: 2 },
  { images: require("../assets/cards/queen_of_spades2.png"), rank: 'Q', suit: 'Gara', value: 3 },
  { images: require("../assets/cards/king_of_spades2.png"), rank: 'K', suit: 'Gara', value: 4 },
  { images: require("../assets/cards/ace_of_spades.png"), rank: 'A', suit: 'Gara', value: 11 },
  // Остальные карты...

  { images: require("../assets/cards/6_of_diamonds.png"), rank: '6', suit: 'Kerpic', value: 0 },
  { images: require("../assets/cards/7_of_diamonds.png"), rank: '7', suit: 'Kerpic', value: 0 },
  { images: require("../assets/cards/8_of_diamonds.png"), rank: '8', suit: 'Kerpic', value: 0 },
  { images: require("../assets/cards/9_of_diamonds.png"), rank: '9', suit: 'Kerpic', value: 0 },
  { images: require("../assets/cards/10_of_diamonds.png"), rank: '10', suit: 'Kerpic', value: 10 },
  { images: require("../assets/cards/jack_of_diamonds2.png"), rank: 'J', suit: 'Kerpic', value: 2 },
  { images: require("../assets/cards/queen_of_diamonds2.png"), rank: 'Q', suit: 'Kerpic', value: 3 },
  { images: require("../assets/cards/king_of_diamonds2.png"), rank: 'K', suit: 'Kerpic', value: 4 },
  { images: require("../assets/cards/ace_of_diamonds.png"), rank: 'A', suit: 'Kerpic', value: 11 },
  // Остальные карты...

  { images: require("../assets/cards/6_of_clubs.png"), rank: '6', suit: 'Jitti', value: 0 },
  { images: require("../assets/cards/7_of_clubs.png"), rank: '7', suit: 'Jitti', value: 0 },
  { images: require("../assets/cards/8_of_clubs.png"), rank: '8', suit: 'Jitti', value: 0 },
  { images: require("../assets/cards/9_of_clubs.png"), rank: '9', suit: 'Jitti', value: 0 },
  { images: require("../assets/cards/10_of_clubs.png"), rank: '10', suit: 'Jitti', value: 10 },
  { images: require("../assets/cards/jack_of_clubs2.png"), rank: 'J', suit: 'Jitti', value: 2 },
  { images: require("../assets/cards/queen_of_clubs2.png"), rank: 'Q', suit: 'Jitti', value: 3 },
  { images: require("../assets/cards/king_of_clubs2.png"), rank: 'K', suit: 'Jitti', value: 4 },
  { images: require("../assets/cards/ace_of_clubs.png"), rank: 'A', suit: 'Jitti', value: 11 },
];

export const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

export default deck;

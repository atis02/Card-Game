import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import Player from './Player';
import deck, { shuffleDeck } from './Deck';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Подключение к серверу WebSocket

const GameTable = () => {
  const [players, setPlayers] = useState([
    {id:0, name: 'Игрок 1', hand: [], playedCard: null },
    { id:1,name: 'Игрок 2', hand: [], playedCard: null }
  ]);
  const [winner, setWinner] = useState(); // Победитель взятки
  const [currentTurn, setCurrentTurn] = useState(winner?winner.id:0); // Ход игрока
  const [trumpSuit, setTrumpSuit] = useState(null);
 console.log(winner!==null&&winner);
 
  useEffect(() => {
    socket.on('cardPlayed', (data) => {
      // Обновляем состояние при получении хода от другого игрока
      const newPlayers = [...players];
      newPlayers[data.playerIndex].playedCard = data.card;
      setPlayers(newPlayers);
      if (data.playerIndex !== currentTurn) {
        checkForWinner();
      }
    });
  }, [players]);

  const startGame = () => {
    const shuffledDeck = shuffleDeck([...deck]);
    const player1Hand = shuffledDeck.slice(0, 4);
    const player2Hand = shuffledDeck.slice(4,8);
    const trumpCard = shuffledDeck[35]; // Козырная карта
    console.log(trumpCard);

    setTrumpSuit(trumpCard);
    setPlayers([
      { name: 'Игрок 1', hand: player1Hand, playedCard: null },
      { name: 'Игрок 2', hand: player2Hand, playedCard: null }
    ]);
  };

  const playCard = (card, index) => {
    const newPlayers = [...players];
    const player = newPlayers[currentTurn];

    player.playedCard = card;
    player.hand.splice(index, 1);
    setPlayers(newPlayers);
    
    socket.emit('cardPlayed', { playerIndex: currentTurn, card }); // Отправляем ход через WebSocket

    if (currentTurn === 0) {
      setCurrentTurn(1);
    } else {
      setCurrentTurn(0);
      checkForWinner();
    }
  };

  const checkForWinner = () => {
    const [player1, player2] = players;
    if (player1.playedCard && player2.playedCard) {
      let winnerIndex;
      if (player1.playedCard.suit === player2.playedCard.suit) {
        // Кто старше по рангу
        winnerIndex = player1.playedCard.value > player2.playedCard.value ? 0 : 1;
      } else if (player1.playedCard.suit === trumpSuit) {
        winnerIndex = 0;
      } else if (player2.playedCard.suit === trumpSuit) {
        winnerIndex = 1;
      } else {
        // Если масти разные и нет козыря, то первый игрок побеждает
        winnerIndex = 0;
      }
      setWinner({playerName:players[winnerIndex].name,id:winnerIndex});
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.trumpText}>Козырь:

      <Image source={trumpSuit&&trumpSuit.images} style={styles.cardImage} />
      </Text>
      {players.map((player, index) => 

          <Player key={index} playerName={player.name} hand={player.hand} disabled={winner.id!==player.id} playCard={playCard} />
        )
      }
      {winner && <Text style={styles.winnerText}>Взятка за {winner.playerName}!</Text>}
      <Button title="Начать игру" onPress={startGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column', // or 'column' based on your layout
    justifyContent: 'space-between', // Change 'center' to 'flex-start', 'flex-end', etc. as needed
    alignItems: 'center',
  },
  trumpText: {
    height:'22%',
    fontSize: 24,
    fontWeight: 'bold',
   
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'green',
  },
  cardImage: {
    width: 80,
    height: 120,
    margin: 5,
  },
});

export default GameTable;

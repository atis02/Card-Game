// PlayedCards.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PlayedCards = ({ cards }) => {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Image source={card.images} style={styles.cardImage} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Добавьте отступ для визуального разделения
  },
  card: {
    margin: 5,
  },
  cardImage: {
    width: 80,
    height: 120,
  },
});

export default PlayedCards;

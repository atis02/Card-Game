import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Player = ({ playerName, hand, playCard, disabled }) => {
  console.log(disabled);
  
  return (
    <View style={[styles.playerContainer, disabled && styles.disabledContainer]}>
      <Text style={styles.playerName}>{playerName}</Text>
      <View style={styles.hand}>
        {hand.map((card, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() =>  playCard(card, index)} // Disable card playing when disabled
            disabled={disabled} // Optionally disable touchable
          > 
            <Image source={card.images} style={styles.cardImage} />
          </TouchableOpacity> 
        ))} 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff', // Default background color
  },
  disabledContainer: {
    backgroundColor: 'gray', // Background color when disabled
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hand: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 80,
    height: 120,
    margin: 5,
  },
});

export default Player;

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GameTable from './components/GameTable';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GameTable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;

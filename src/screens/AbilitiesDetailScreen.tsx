import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AbilitiesDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO: Abilities Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

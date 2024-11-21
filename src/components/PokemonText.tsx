import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface PokemonTextProps {
  text: string;
}

const PokemonText: React.FC<PokemonTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text.toUpperCase()}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pokemon-Solid',
    fontSize: 35,
  },
});

export default PokemonText;

import React from 'react';
import NavBar from './src/navigation/NavBar';
import { useFonts } from 'expo-font';
import LoadingIndicator from './src/components/LoadingIndicator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Pokemon-Solid': require('./assets/fonts/PokemonSolid.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  return <NavBar />;
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getDefaultHeaderOptions } from './headerConfig';
import { PokemonTypeListScreen } from '../screens/PokemonTypeListScreen';
import { RootStackParamList } from './types';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';
import { PokemonListScreen } from '../screens/PokemonListScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function PokemonTypesNavigator() {
  return (
    <Stack.Navigator screenOptions={getDefaultHeaderOptions}>
      <Stack.Screen
        name="PokemonTypeList"
        component={PokemonTypeListScreen}
        options={{ title: 'Pokemon Types' }}
      />
      <Stack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{ title: 'Pokemon List' }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={{ title: 'Pokemon Detail' }}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AbilityListScreen from '../screens/AbilitiesListScreen';
import AbilityDetailScreen from '../screens/AbilitiesDetailScreen';
import { getDefaultHeaderOptions } from './headerConfig';

const Stack = createStackNavigator();

export default function AbilitiesNavigator() {
  return (
    <Stack.Navigator screenOptions={getDefaultHeaderOptions}>
      <Stack.Screen name="AbilityList" component={AbilityListScreen} />
      <Stack.Screen name="AbilityDetails" component={AbilityDetailScreen} />
    </Stack.Navigator>
  );
}

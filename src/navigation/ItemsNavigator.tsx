import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListScreen from '../screens/ItemsListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import { getDefaultHeaderOptions } from './headerConfig';

const Stack = createStackNavigator();

export default function ItemsNavigator() {
  return (
    <Stack.Navigator screenOptions={getDefaultHeaderOptions}>
      <Stack.Screen name="ItemList" component={ItemListScreen} />
      <Stack.Screen name="ItemDetails" component={ItemDetailScreen} />
    </Stack.Navigator>
  );
}

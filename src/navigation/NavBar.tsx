import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonTypesNavigator from './PokemonTypesNavigator';
import ItemsNavigator from './ItemsNavigator';
import AbilitiesNavigator from './AbilitiesNavigator';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3c5aa6',
          tabBarInactiveTintColor: '#666',
        }}
      >
        <Tab.Screen
          name="Types"
          options={{
            tabBarLabel: 'Types',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-circle" color={color} size={size} />
            ),
          }}
          component={PokemonTypesNavigator}
        />
        <Tab.Screen
          name="Items"
          options={{
            tabBarLabel: 'Items',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cube" color={color} size={size} />
            ),
          }}
          component={ItemsNavigator}
        />
        <Tab.Screen
          name="Abilities"
          options={{
            tabBarLabel: 'Abilities',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flash" color={color} size={size} />
            ),
          }}
          component={AbilitiesNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

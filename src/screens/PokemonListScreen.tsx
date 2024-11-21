import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { usePokemonListByType } from '../hooks/usePokemonListByType';
import { RootStackParamList } from '../navigation/types';
import ErrorMessage from '../components/ErrorMessage';
import LoadingIndicator from '../components/LoadingIndicator';
import { Item, TypeDetails } from '../types/types';
import ListItem from '../components/ListItem';

type TypeDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'TypeDetails'
>;

export const PokemonListScreen: React.FC<TypeDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { typeName } = route.params;
  const { data, loading, error } = usePokemonListByType(typeName);

  const handleTypePress = useCallback(
    (pokemonName: string) => {
      navigation.navigate('PokemonDetail', { pokemonName: pokemonName });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: TypeDetails) => (
      <ListItem
        name={item.pokemon.name}
        onPress={() => handleTypePress(item.pokemon.name)}
      />
    ),
    [],
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type: {data?.name}</Text>
      <FlatList
        data={data?.pokemon}
        keyExtractor={(item, index) => `${item.pokemon.name}-${index}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  pokemonName: {
    fontSize: 16,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

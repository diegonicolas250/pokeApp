import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import ErrorMessage from '../components/ErrorMessage';
import LoadingIndicator from '../components/LoadingIndicator';

import PokemonImage from '../components/PokemonImage';
import PokemonText from '../components/PokemonText';

type PokemonDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PokemonDetail'
>;

const PokemonDetailScreen: React.FC<PokemonDetailScreenProps> = ({ route }) => {
  const { pokemonName } = route.params;
  const { data, loading, error } = usePokemonDetail(pokemonName);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <PokemonText text={data?.name} />

      <PokemonImage
        imageUri={data?.sprites.other['official-artwork'].front_default}
        size="big"
        cryUri={data?.cries?.latest}
      />

      <View style={styles.imageContainer}>
        <PokemonImage imageUri={data?.sprites.front_default} />
        <PokemonImage imageUri={data?.sprites.front_shiny} />
        <PokemonImage imageUri={data?.sprites.front_female} />
        <PokemonImage imageUri={data?.sprites.front_shiny_female} />
      </View>

      <Text style={styles.subtitle}>Types</Text>
      <View style={styles.typesContainer}>
        {data?.types.map((type, index) => (
          <Text key={index} style={styles.type}>
            {type.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textTransform: 'capitalize',
  },
  type: {
    color: '#555',
    fontSize: 16,
    marginHorizontal: 8,
    textTransform: 'capitalize',
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default PokemonDetailScreen;

import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { usePokemonTypes } from '../hooks/usePokemonTypes';
import { Item } from '../types/types';
import { StackScreenProps } from '@react-navigation/stack';
import ErrorMessage from '../components/ErrorMessage';
import LoadingIndicator from '../components/LoadingIndicator';
import ListItem from '../components/ListItem';

type TypeListScreenProps = StackScreenProps<
  ReactNavigation.RootParamList,
  'PokemonTypeList'
>;

export const PokemonTypeListScreen: React.FC<TypeListScreenProps> = ({
  navigation,
}) => {
  const { data: types, loading, error, loadMore, hasMore } = usePokemonTypes();

  const handleTypePress = useCallback(
    (type: Item) => {
      navigation.navigate('PokemonList', { typeName: type.name });
    },
    [navigation],
  );

  const renderItem = useCallback(({ item }: { item: Item }) => {
    return <ListItem onPress={() => handleTypePress(item)} name={item.name} />;
  }, []);

  const renderEmptyComponent = useCallback(() => {
    if (loading) {
      return <LoadingIndicator />;
    }
    return <Text style={styles.emptyText}>No Pokemon types available.</Text>;
  }, [loading]);

  const renderFooter = useCallback(() => {
    if (loading && hasMore) {
      return <Text style={styles.loadingText}>Loading...</Text>;
    }
    return null;
  }, [loading, hasMore]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={types}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
        onEndReached={hasMore ? loadMore : null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
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
  emptyText: {
    color: '#888',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

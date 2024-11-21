import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface ListItemProps {
  name: string;
  onPress?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.itemName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    elevation: 2,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    alignItems: 'center',
  },
  itemName: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default ListItem;

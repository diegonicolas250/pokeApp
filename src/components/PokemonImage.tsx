import React, { useCallback, useRef } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface PokemonImageProps {
  imageUri?: string;
  size?: 'big' | 'small';
  cryUri?: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({
  imageUri,
  size = 'small',
  cryUri,
}) => {
  const sound = useRef<Audio.Sound | null>(null);
  const shake = useSharedValue(0);

  const playCry = useCallback(async () => {
    if (!cryUri) return;

    try {
      const { sound: cry } = await Audio.Sound.createAsync({
        uri: cryUri,
      });
      sound.current = cry;
      await cry.playAsync();

      shake.value = withSequence(
        withTiming(-10, { duration: 150 }),
        withTiming(10, { duration: 150 }),
        withTiming(-10, { duration: 150 }),
        withTiming(0, { duration: 150 }),
      );
    } catch (err) {
      console.error('Failed to play cry:', err);
    }
  }, [cryUri]);

  const animatedStyle = useAnimatedStyle<any>(() => ({
    transform: [{ translateX: shake.value }],
  }));

  if (!imageUri) return null;

  const imageStyle = size === 'big' ? styles.bigImage : styles.smallImage;

  return (
    <TouchableOpacity onPress={playCry}>
      <Animated.View style={animatedStyle}>
        <View style={styles.container}>
          <Image
            source={{ uri: imageUri }}
            style={imageStyle}
            resizeMode="contain"
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigImage: {
    height: 250,
    width: 250,
  },
  container: {
    alignItems: 'center',
    margin: 8,
  },
  smallImage: {
    height: 100,
    width: 100,
  },
});

export default PokemonImage;

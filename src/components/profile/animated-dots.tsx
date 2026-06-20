import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Palette } from '@/constants/design-tokens';

/**
 * Pulsing green location indicator (Figma 1:34633): a solid center dot with an
 * expanding/fading ring, animated on the UI thread via reanimated.
 */
export function AnimatedDots({ size = 16 }: { size?: number }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1800, easing: Easing.out(Easing.ease) }),
      -1,
      false,
    );
    return () => cancelAnimation(progress);
  }, [progress]);

  const ringStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 0.5 + progress.value * 1.1 }],
    opacity: 1 - progress.value,
  }));

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Animated.View style={[styles.ring, { width: size, height: size, borderRadius: size / 2 }, ringStyle]} />
      <View style={styles.center} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    backgroundColor: Palette.secondary30,
  },
  center: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Palette.secondary30,
  },
});

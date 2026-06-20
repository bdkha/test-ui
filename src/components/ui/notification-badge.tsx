import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { Palette, Type } from '@/constants/design-tokens';

type Props = {
  count: number | string;
  /** Diameter of the badge. 16 for navbar, 20 for the bell action. */
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const GRADIENT = [Palette.secondary30, Palette.secondary40] as const;

/**
 * Lime gradient pill with black/10 border and a green glow. Used for unread
 * counters in the action row and the bottom navbar (AC5).
 */
export function NotificationBadge({ count, size = 16, style }: Props) {
  return (
    <View style={[styles.glow, { width: size, height: size, borderRadius: size }, style]}>
      <LinearGradient
        colors={GRADIENT}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[
          styles.fill,
          { width: size, height: size, borderRadius: size },
        ]}>
        <Text style={styles.text} numberOfLines={1} allowFontScaling={false}>
          {count}
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  glow: {
    // iOS renders a true colored glow; Android falls back to elevation.
    ...Platform.select({
      ios: {
        shadowColor: Palette.secondary30,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 0 },
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
  fill: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Palette.black10,
    overflow: 'hidden',
  },
  text: {
    ...Type.xs10_semibold,
    color: Palette.black60,
    textAlign: 'center',
  },
});

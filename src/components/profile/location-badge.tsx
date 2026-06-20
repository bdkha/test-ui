import { BlurView } from 'expo-blur';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { NavigationIcon, SettingsSmallIcon } from '@/components/icons';
import { AnimatedDots } from '@/components/profile/animated-dots';
import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';

const LOCATION = 'Cardiff-by-the-Sea, Encinitas, CA';

/** Location pill + settings button (Figma 254:27460). */
export function LocationBadge() {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <BlurView
          intensity={BlurIntensity.b10}
          tint="dark"
          style={StyleSheet.absoluteFill}
          blurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
        />
        <View style={[StyleSheet.absoluteFill, styles.pillBg]} />
        <AnimatedDots size={16} />
        <NavigationIcon size={16} color={Palette.white100} />
        <Text style={styles.label} numberOfLines={1}>
          {LOCATION}
        </Text>
      </View>
      <Pressable style={styles.settingsBtn} accessibilityRole="button" accessibilityLabel="Location settings">
        <BlurView
          intensity={BlurIntensity.b10}
          tint="dark"
          style={StyleSheet.absoluteFill}
          blurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
        />
        <View style={[StyleSheet.absoluteFill, styles.pillBg]} />
        <SettingsSmallIcon size={12} color={Palette.white100} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pill: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 8,
    paddingRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  pillBg: {
    backgroundColor: Palette.white10,
  },
  label: {
    ...Type.h6_14_semibold,
    color: Palette.white80,
  },
  settingsBtn: {
    padding: 10,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

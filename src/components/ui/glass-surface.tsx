import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { Palette } from '@/constants/design-tokens';
import { GlassBlur } from '@/components/ui/glass-blur';
import { SkiaGradientBorder } from '@/components/ui/skia-gradient-border';

type Props = PropsWithChildren<{
  /** Corner radius of the surface. */
  radius: number;
  /** expo-blur intensity (0-100). See BlurIntensity tokens. */
  intensity: number;
  tint?: 'dark' | 'light' | 'default';
  /** Translucent fill layered over the blur (e.g. white5 / white7). */
  bgColor?: string;
  /** Skia top-line stroke width. Set to 0 to disable the highlight border. */
  borderStroke?: number;
  /** Skia top-line gradient stops. */
  borderColors?: readonly string[];
  style?: StyleProp<ViewStyle>;
}>;

/**
 * Frosted-glass container: backdrop blur + translucent fill + Skia highlight
 * border. The shared primitive behind cards, the contact bar and the navbar.
 */
export function GlassSurface({
  radius,
  intensity,
  tint,
  bgColor = Palette.white5,
  borderStroke = 1,
  borderColors,
  style,
  children,
}: Props) {
  return (
    <View style={[{ borderRadius: radius, overflow: 'hidden' }, style]}>
      <GlassBlur intensity={intensity} tint={tint} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: bgColor }]} />
      {children}
      {borderStroke > 0 && (
        <SkiaGradientBorder radius={radius} strokeWidth={borderStroke} colors={borderColors} />
      )}
    </View>
  );
}

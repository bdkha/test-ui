import { BlurView } from 'expo-blur';
import type { ReactNode } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';
import { SkiaGradientBorder } from '@/components/ui/skia-gradient-border';

type BaseProps = {
  onPress?: () => void;
  radius?: number;
  /** Show the 0.5px white5 outline (most buttons). The three-dots button omits it. */
  outline?: boolean;
  /** Skia top-line highlight. */
  topLine?: boolean;
  intensity?: number;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
};

type WithTextProps = BaseProps & {
  variant?: 'withText';
  icon: ReactNode;
  label: string;
  /** Stretch to fill its flex parent (bottom action row). */
  fill?: boolean;
};

type IconOnlyProps = BaseProps & {
  variant: 'iconOnly';
  icon: ReactNode;
  label?: never;
};

type Props = WithTextProps | IconOnlyProps;

function GlowBlobs() {
  return (
    <>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
    </>
  );
}

/**
 * Frosted "BlurButton+Outline" (Figma 754:58413). Blur + white5 fill + two soft
 * white20 glow blobs + Skia top-line. Two layouts: icon+label and icon-only.
 */
export function BlurButton(props: Props) {
  const {
    onPress,
    radius = 10,
    outline = true,
    topLine = true,
    intensity = BlurIntensity.b10,
    style,
    accessibilityLabel,
    icon,
  } = props;

  const isIconOnly = props.variant === 'iconOnly';
  const fill = !isIconOnly && (props as WithTextProps).fill;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? (!isIconOnly ? (props as WithTextProps).label : undefined)}
      style={({ pressed }) => [
        styles.base,
        { borderRadius: radius, opacity: pressed ? 0.85 : 1 },
        isIconOnly ? styles.iconOnly : styles.withText,
        fill ? styles.fill : null,
        outline ? styles.outline : null,
        style,
      ]}>
      <BlurView
        intensity={intensity}
        tint="dark"
        style={[StyleSheet.absoluteFill, { borderRadius: radius }]}
        blurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
      />
      <View
        style={[StyleSheet.absoluteFill, { backgroundColor: Palette.white5, borderRadius: radius }]}
      />
      <GlowBlobs />
      {icon}
      {!isIconOnly && (
        <Text style={styles.label} numberOfLines={1} allowFontScaling={false}>
          {(props as WithTextProps).label}
        </Text>
      )}
      {topLine && <SkiaGradientBorder radius={radius} strokeWidth={0.5} colors={[Palette.white10, Palette.white0]} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  withText: {
    gap: 8,
    paddingHorizontal: 16,
  },
  iconOnly: {
    width: 44,
    padding: 12,
  },
  fill: {
    flex: 1,
    minWidth: 0,
  },
  outline: {
    borderWidth: 0.5,
    borderColor: Palette.white5,
  },
  label: {
    ...Type.btn14_regular,
    color: Palette.white80,
    textAlign: 'center',
  },
  glowTop: {
    position: 'absolute',
    top: -15.5,
    left: 14.5,
    right: 14.5,
    height: 26,
    borderRadius: 200,
    backgroundColor: Palette.white20,
    opacity: 0.6,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -15.5,
    left: 23.5,
    right: 23.5,
    height: 32,
    borderRadius: 200,
    backgroundColor: Palette.white20,
    opacity: 0.6,
  },
});

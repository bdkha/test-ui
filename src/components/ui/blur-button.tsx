import { BlurMask, Canvas, RoundedRect } from '@shopify/react-native-skia';
import { useState, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';
import { GlassBlur } from '@/components/ui/glass-blur';
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

/**
 * The two soft white "BG Element" glows (Figma 754:60269 / 754:60588): white20
 * pills with a ~16px Gaussian blur, clipped to the button. Drawn with Skia so
 * they feather into a glow instead of reading as hard white pills.
 */
function GlowBlobs() {
  const [size, setSize] = useState({ w: 0, h: 0 });

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (width !== size.w || height !== size.h) {
      setSize({ w: width, h: height });
    }
  };

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none" onLayout={onLayout}>
      {size.w > 0 && size.h > 0 && (
        <Canvas style={{ width: size.w, height: size.h }}>
          {/* top glow */}
          <RoundedRect
            x={14.5}
            y={-15.5}
            width={size.w - 29}
            height={26}
            r={13}
            color={Palette.white20}
            opacity={0.6}>
            <BlurMask blur={12} style="normal" />
          </RoundedRect>
          {/* bottom glow */}
          <RoundedRect
            x={23.5}
            y={size.h - 16.5}
            width={size.w - 47}
            height={32}
            r={16}
            color={Palette.white20}
            opacity={0.6}>
            <BlurMask blur={12} style="normal" />
          </RoundedRect>
        </Canvas>
      )}
    </View>
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
      <GlassBlur intensity={intensity} style={{ borderRadius: radius }} />
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
});

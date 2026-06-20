import { Canvas, LinearGradient, RoundedRect, vec } from '@shopify/react-native-skia';
import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';

import { Palette } from '@/constants/design-tokens';

type Props = {
  /** Corner radius matching the surface it overlays. */
  radius: number;
  /** Stroke width of the highlight line. */
  strokeWidth?: number;
  /** Gradient stops (top -> bottom). Defaults to the glass top-line highlight. */
  colors?: readonly string[];
};

/**
 * The light "top-line" highlight border of glass surfaces, drawn with Skia
 * (required by AC3). Rendered as an absolutely-positioned, non-interactive
 * overlay; size is measured via onLayout so it always matches its parent.
 */
export function SkiaGradientBorder({ radius, strokeWidth = 1, colors }: Props) {
  const [size, setSize] = useState({ w: 0, h: 0 });

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (width !== size.w || height !== size.h) {
      setSize({ w: width, h: height });
    }
  };

  const stops = (colors ?? [Palette.white20, Palette.white5]) as string[];

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none" onLayout={onLayout}>
      {size.w > 0 && size.h > 0 && (
        <Canvas style={{ width: size.w, height: size.h }}>
          <RoundedRect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={size.w - strokeWidth}
            height={size.h - strokeWidth}
            r={radius}
            style="stroke"
            strokeWidth={strokeWidth}>
            <LinearGradient start={vec(0, 0)} end={vec(0, size.h)} colors={stops} />
          </RoundedRect>
        </Canvas>
      )}
    </View>
  );
}

import { Canvas, RadialGradient, RoundedRect, vec } from '@shopify/react-native-skia';
import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';

import { Palette } from '@/constants/design-tokens';

/**
 * Radial highlight behind the selected navbar item (Figma 5474:12349), drawn
 * with Skia. The glow originates from the upper area and fades to transparent,
 * matching the source radial-gradient fill.
 */
export function SelectedGlow({ radius = 18 }: { radius?: number }) {
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
          <RoundedRect x={0} y={0} width={size.w} height={size.h} r={radius}>
            <RadialGradient
              c={vec(size.w * 0.62, size.h * 0.95)}
              r={size.h * 1.05}
              colors={[Palette.white20, Palette.white0]}
            />
          </RoundedRect>
        </Canvas>
      )}
    </View>
  );
}

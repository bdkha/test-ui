import { BlurView, type BlurViewProps } from 'expo-blur';
import { StyleSheet } from 'react-native';

/**
 * Shared frosted-blur layer. Sửa 2 bug so với <BlurView> thô:
 *  - dùng đúng prop `experimentalBlurMethod` (prop cũ `blurMethod` bị bỏ qua
 *    nên Android không blur);
 *  - mặc định material "ultra thin" thay cho tint="dark" — vốn làm kính tối
 *    gần đen trên iOS khi nằm trên gradient tối của card, che mất cả ảnh mờ
 *    lẫn các tín hiệu sáng (fill/glow/top-line).
 * Mặc định phủ kín parent (absoluteFill).
 */
export function GlassBlur({ tint = 'systemUltraThinMaterialDark', style, ...rest }: BlurViewProps) {
  return (
    <BlurView
      tint={tint}
      blurMethod='dimezisBlurView'
      style={[StyleSheet.absoluteFill, style]}
      {...rest}
    />
  );
}

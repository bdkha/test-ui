/**
 * Design tokens extracted 1:1 from the Figma file `Test Tatum (Copy)`
 * (file key GkXS0MMa1wHcQWOWNaMQLj, frame 254:27474) via get_variable_defs.
 * RN uses absolute px line-heights, so Figma multipliers are pre-multiplied here.
 */
import type { TextStyle } from 'react-native';

export const Palette = {
  white100: '#ffffff',
  white80: 'rgba(255,255,255,0.8)',
  white60: 'rgba(255,255,255,0.6)',
  white50: 'rgba(255,255,255,0.5)',
  white40: 'rgba(255,255,255,0.4)',
  white20: 'rgba(255,255,255,0.2)',
  white10: 'rgba(255,255,255,0.1)',
  white7: 'rgba(255,255,255,0.07)',
  white5: 'rgba(255,255,255,0.05)',
  white2: 'rgba(255,255,255,0.02)',
  white0: 'rgba(255,255,255,0)',
  black: '#000000',
  black80: 'rgba(0,0,0,0.8)',
  black60: 'rgba(0,0,0,0.6)',
  black10: 'rgba(0,0,0,0.1)',
  black1: 'rgba(0,0,0,0.01)',
  secondary30: '#e1ff4f',
  secondary40: '#d7fd1e',
  blue40: '#0084ff',
  blue5: '#56d8ff',
} as const;

/** fontFamily ids registered via expo-font in _layout.tsx */
export const Font = {
  regular: 'Switzer-Regular',
  medium: 'Switzer-Medium',
  semibold: 'Switzer-Semibold',
} as const;

/** Typography: size / lineHeight (absolute px) / letterSpacing. */
export const Type = {
  h4_20_medium: { fontFamily: Font.medium, fontSize: 20, lineHeight: 28, letterSpacing: 0 },
  h6_14_semibold: { fontFamily: Font.semibold, fontSize: 14, lineHeight: 15.96, letterSpacing: -0.24 },
  body14_medium: { fontFamily: Font.medium, fontSize: 14, lineHeight: 17.92, letterSpacing: 0 },
  body12_semibold: { fontFamily: Font.semibold, fontSize: 12, lineHeight: 15.84, letterSpacing: 0 },
  body12_medium: { fontFamily: Font.medium, fontSize: 12, lineHeight: 15.84, letterSpacing: 0 },
  body10_medium: { fontFamily: Font.medium, fontSize: 10, lineHeight: 12, letterSpacing: 0 },
  btn14_regular: { fontFamily: Font.regular, fontSize: 14, lineHeight: 17.92, letterSpacing: -0.25 },
  btn14_semibold: { fontFamily: Font.semibold, fontSize: 14, lineHeight: 17.92, letterSpacing: 0 },
  btn12_semibold: { fontFamily: Font.semibold, fontSize: 12, lineHeight: 16.08, letterSpacing: 0 },
  btn12_regular: { fontFamily: Font.regular, fontSize: 12, lineHeight: 12, letterSpacing: 0 },
  xs10_semibold: { fontFamily: Font.semibold, fontSize: 10, lineHeight: 12, letterSpacing: 0 },
  xs10_medium: { fontFamily: Font.medium, fontSize: 10, lineHeight: 13.6, letterSpacing: 0 },
} as const satisfies Record<string, TextStyle>;

/**
 * Figma BACKGROUND_BLUR radius -> expo-blur intensity (0-100).
 * Not a linear map; these are tuned starting points (see plan P4).
 */
export const BlurIntensity = { b10: 35, b15: 45, b20: 55, b30: 70, b66: 95 } as const;

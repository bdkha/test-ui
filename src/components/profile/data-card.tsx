import { BlurView } from 'expo-blur';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { ArrowUpRightIcon } from '@/components/icons';
import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';

export type DataCardProps = {
  value: string;
  label: string;
  /** Sub-label, e.g. "Last 7 days" or "Lifetime views". */
  caption: string;
  /** Trend percentage; omit to hide the arrow + percent (e.g. Total Views). */
  percent?: string;
};

/** Single insight stat chip (Figma 254:27491). */
export function DataCard({ value, label, caption, percent }: DataCardProps) {
  return (
    <View style={styles.card}>
      <BlurView
        intensity={BlurIntensity.b15}
        tint="dark"
        style={StyleSheet.absoluteFill}
        blurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
      />
      <View style={[StyleSheet.absoluteFill, styles.bg]} />
      <Text style={styles.value}>{value}</Text>
      <View style={styles.textBlock}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.trendRow}>
          <Text style={styles.caption}>{caption}</Text>
          {percent !== undefined && (
            <>
              <ArrowUpRightIcon size={12} color={Palette.secondary30} />
              <Text style={styles.percent}>{percent}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  bg: {
    backgroundColor: Palette.white7,
  },
  value: {
    ...Type.h4_20_medium,
    color: Palette.white100,
  },
  textBlock: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    ...Type.body12_semibold,
    color: Palette.white80,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  caption: {
    ...Type.body10_medium,
    color: Palette.white60,
  },
  percent: {
    ...Type.body10_medium,
    color: Palette.secondary30,
  },
});

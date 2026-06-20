import { StyleSheet, Text, View } from 'react-native';

import { Palette, Type } from '@/constants/design-tokens';

/** Placeholder screen for the not-yet-built tabs: black background, centered label. */
export function MockScreen({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...Type.h4_20_medium,
    color: Palette.white80,
  },
});

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ChevronRightIcon, GreenDotIcon } from '@/components/icons';
import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';
import { GlassBlur } from '@/components/ui/glass-blur';

/** "DP Conversations" stacked card preview (Figma 254:27536). */
export function ConversationsBlock() {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          DP Conversations <Text style={styles.count}>260</Text>
        </Text>
        <Pressable style={styles.seeAll} accessibilityRole="button" accessibilityLabel="See all conversations">
          <Text style={styles.seeAllText}>See all</Text>
          <ChevronRightIcon size={16} color={Palette.white60} />
        </Pressable>
      </View>

      <View style={styles.stack}>
        {/* Back cards (peeking) */}
        <View style={[styles.peekCard, styles.thirdCard]} />
        <View style={[styles.peekCard, styles.secondCard]} />

        {/* Front card */}
        <View style={styles.frontCard}>
          <GlassBlur intensity={BlurIntensity.b10} />
          <View style={[StyleSheet.absoluteFill, styles.frontBg]} />
          <GreenDotIcon size={6} color={Palette.secondary30} />
          <Text style={styles.frontText} numberOfLines={1}>
            <Text style={styles.ask}>Anonymous Ask: </Text>
            <Text style={styles.askQuestion}>What does Ariana do for work?</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 18,
  },
  title: {
    ...Type.body14_medium,
    color: Palette.white40,
  },
  count: {
    ...Type.btn14_semibold,
    color: Palette.white80,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAllText: {
    ...Type.btn14_semibold,
    color: Palette.white60,
  },
  stack: {
    marginTop: 4,
    height: 52,
  },
  frontCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    zIndex: 3,
  },
  frontBg: {
    backgroundColor: Palette.white7,
  },
  frontText: {
    flex: 1,
    minWidth: 0,
  },
  ask: {
    ...Type.btn12_semibold,
    color: Palette.white80,
  },
  askQuestion: {
    ...Type.btn12_regular,
    lineHeight: 15.84,
    color: Palette.white60,
  },
  peekCard: {
    position: 'absolute',
    height: 32,
    borderRadius: 12,
    backgroundColor: Palette.white5,
  },
  secondCard: {
    top: 14,
    left: 16,
    right: 16,
    zIndex: 2,
  },
  thirdCard: {
    top: 20,
    left: 32,
    right: 32,
    zIndex: 1,
  },
});

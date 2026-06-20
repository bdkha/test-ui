import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, View } from 'react-native';

import { BottomActions } from '@/components/profile/bottom-actions';
import { ContactBar } from '@/components/profile/contact-bar';
import { DataCard, type DataCardProps } from '@/components/profile/data-card';
import { LocationBadge } from '@/components/profile/location-badge';
import { Palette } from '@/constants/design-tokens';

const HERO = require('@/assets/figma/hero.png');

const INSIGHTS: DataCardProps[] = [
  { value: '64', label: 'PROFILE VIEWS', caption: 'Last 7 days', percent: '20%' },
  { value: '35', label: 'DP CHATS', caption: 'Last 7 days', percent: '+14%' },
  { value: '18', label: 'CONNECTIONS', caption: 'Last 7 days', percent: '+14%' },
  { value: '1K', label: 'TOTAL VIEWS', caption: 'Lifetime views' },
  { value: '16', label: 'LINKS CLICKS', caption: 'Last 7 days', percent: '+14%' },
];

/** Hero card: photo background + insights + location/contact/actions (Figma 254:27485). */
export function ProfilePictureCard() {
  return (
    <View style={styles.card}>
      <Image source={HERO} style={StyleSheet.absoluteFill} contentFit="cover" />

      {/* Top + bottom darkening gradients for legibility. */}
      <LinearGradient
        colors={[Palette.black80, Palette.black1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.topGradient}
        pointerEvents="none"
      />
      <LinearGradient
        colors={[Palette.black1, Palette.black80]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.bottomGradient}
        pointerEvents="none"
      />

      <View style={styles.content}>
        {/* Insights */}
        <View style={styles.insightsWrap}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.insightsRow}>
            {INSIGHTS.map((item) => (
              <DataCard key={item.label} {...item} />
            ))}
          </ScrollView>
          <LinearGradient
            colors={[Palette.black1, Palette.black]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.fade}
            pointerEvents="none"
          />
        </View>

        {/* Card info */}
        <View style={styles.cardInfo}>
          <LocationBadge />
          <ContactBar />
          <BottomActions />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 626,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: Palette.white10,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 94,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 143,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  insightsWrap: {
    height: 44,
  },
  insightsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingRight: 24,
  },
  fade: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 40,
  },
  cardInfo: {
    gap: 4,
    alignItems: 'center',
  },
});

import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { VerifiedBadgeIcon } from '@/components/icons';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import { GlassSurface } from '@/components/ui/glass-surface';
import { BlurIntensity, Palette, Type } from '@/constants/design-tokens';

const AVATAR = require('@/assets/figma/contact-avatar.png');

/** Avatar + name + follower stats bar (Figma 254:27531). */
export function ContactBar() {
  return (
    <GlassSurface
      radius={20}
      intensity={BlurIntensity.b30}
      bgColor={Palette.white7}
      borderStroke={1}
      style={styles.surface}>
      <View style={styles.inner}>
        <View style={styles.left}>
          <Image source={AVATAR} style={styles.avatar} contentFit="cover" />
          <View style={styles.nameCol}>
            <View style={styles.nameRow}>
              <Text style={styles.name} numberOfLines={1}>
                Ariana Luterman
              </Text>
              <VerifiedBadgeIcon size={12} />
            </View>
            <Text style={styles.role} numberOfLines={1}>
              Triathlete, Creator
            </Text>
          </View>
        </View>

        <View style={styles.statsBar}>
          <View style={styles.statsCol}>
            <Text style={styles.followers}>72.5k</Text>
            <Text style={styles.followersLabel}>Followers</Text>
          </View>
          <InstagramIcon size={16} />
        </View>
      </View>
    </GlassSurface>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: '100%',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  left: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: Palette.white20,
  },
  nameCol: {
    flex: 1,
    minWidth: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    ...Type.h6_14_semibold,
    fontSize: 16,
    lineHeight: 17.6,
    letterSpacing: 0,
    color: Palette.white100,
  },
  role: {
    ...Type.body12_medium,
    color: Palette.white60,
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: Palette.white5,
  },
  statsCol: {
    alignItems: 'center',
  },
  followers: {
    ...Type.h6_14_semibold,
    color: Palette.white100,
  },
  followersLabel: {
    ...Type.xs10_medium,
    color: Palette.white80,
  },
});

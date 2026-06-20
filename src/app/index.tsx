import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ConversationsBlock } from '@/components/profile/conversations-block';
import { ElinkActions } from '@/components/profile/elink-actions';
import { ProfilePictureCard } from '@/components/profile/profile-picture-card';
import { Palette } from '@/constants/design-tokens';

const NAVBAR_HEIGHT = 56;

/** Profile (Tatum) screen — pixel-matched to Figma 254:27474. */
export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 8,
            paddingBottom: NAVBAR_HEIGHT + Math.max(insets.bottom, 8) + 24,
          },
        ]}>
        <ElinkActions />
        <ProfilePictureCard />
        <ConversationsBlock />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Palette.black,
  },
  content: {
    paddingHorizontal: 16,
    gap: 20,
  },
});

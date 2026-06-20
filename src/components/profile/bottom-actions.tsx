import { StyleSheet, View } from 'react-native';

import { CardsIcon, EyeIcon, ShareIcon } from '@/components/icons';
import { BlurButton } from '@/components/ui/blur-button';
import { Palette } from '@/constants/design-tokens';

/** Three equal-width glass buttons (Figma 254:27532). */
export function BottomActions() {
  return (
    <View style={styles.row}>
      <BlurButton fill radius={12} icon={<EyeIcon size={18} color={Palette.white80} />} label="View Profile" />
      <BlurButton fill radius={12} icon={<CardsIcon size={18} color={Palette.white80} />} label="All Cards" />
      <BlurButton fill radius={12} icon={<ShareIcon size={18} color={Palette.white80} />} label="Share" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    width: '100%',
  },
});

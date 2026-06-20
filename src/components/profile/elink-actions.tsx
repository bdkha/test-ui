import { StyleSheet, View } from 'react-native';

import {
  BellIcon,
  PencilIcon,
  SettingsIcon,
  SparkleIcon,
  ThreeLinesIcon,
} from '@/components/icons';
import { BlurButton } from '@/components/ui/blur-button';
import { NotificationBadge } from '@/components/ui/notification-badge';
import { BlurIntensity, Palette } from '@/constants/design-tokens';

/** Top action row (Figma 254:27477): Train AI / Edit / Settings / Bell+badge / More. */
export function ElinkActions() {
  return (
    <View style={styles.row}>
      <BlurButton
        icon={<SparkleIcon size={18} color={Palette.white100} />}
        label="Train AI Chat"
        radius={10}
      />
      <BlurButton icon={<PencilIcon size={18} color={Palette.white100} />} label="Edit" radius={10} />
      <BlurButton
        variant="iconOnly"
        icon={<SettingsIcon size={18} color={Palette.white100} />}
        radius={10}
        accessibilityLabel="Settings"
      />
      <View>
        <BlurButton
          variant="iconOnly"
          icon={<BellIcon size={18} color={Palette.white80} />}
          radius={10}
          accessibilityLabel="Notifications"
        />
        <NotificationBadge count={2} size={20} style={styles.bellBadge} />
      </View>
      <BlurButton
        variant="iconOnly"
        icon={<ThreeLinesIcon size={18} color={Palette.white100} />}
        radius={16}
        outline={false}
        topLine={false}
        intensity={BlurIntensity.b10}
        accessibilityLabel="More"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  bellBadge: {
    position: 'absolute',
    left: 26,
    top: -2,
  },
});

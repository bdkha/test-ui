import { Image } from 'expo-image';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  NavConversationsIcon,
  NavPaperPlaneIcon,
  NavSearchIcon,
  NavUsersIcon,
} from '@/components/icons';
import { GlassSurface } from '@/components/ui/glass-surface';
import { NotificationBadge } from '@/components/ui/notification-badge';
import { SelectedGlow } from '@/components/tab-bar/selected-glow';
import { SkiaGradientBorder } from '@/components/ui/skia-gradient-border';
import { BlurIntensity, Palette } from '@/constants/design-tokens';

const AVATAR = require('@/assets/figma/contact-avatar.png');

type TabConfig = {
  /** Route name registered in _layout. */
  route: string;
  renderIcon: (selected: boolean) => ReactNode;
  badge?: number;
  /** Avatar-style selected item gets a fixed width + radial glow. */
  isAvatar?: boolean;
  /** Fixed-width item (vs flex). */
  fixedWidth?: boolean;
};

const TABS: TabConfig[] = [
  {
    route: 'index',
    isAvatar: true,
    fixedWidth: true,
    badge: 2,
    renderIcon: () => (
      <Image source={AVATAR} style={styles.avatar} contentFit="cover" />
    ),
  },
  {
    route: 'contacts',
    badge: 2,
    renderIcon: (selected) => (
      <NavUsersIcon size={22} color={selected ? Palette.white100 : Palette.white50} />
    ),
  },
  {
    route: 'messages',
    badge: 12,
    renderIcon: (selected) => (
      <NavPaperPlaneIcon size={22} color={selected ? Palette.white100 : Palette.white50} />
    ),
  },
  {
    route: 'conversations',
    fixedWidth: true,
    badge: 2,
    renderIcon: (selected) => (
      <NavConversationsIcon size={22} color={selected ? Palette.white100 : Palette.white50} />
    ),
  },
  {
    route: 'discover',
    fixedWidth: true,
    renderIcon: (selected) => (
      <NavSearchIcon size={22} color={selected ? Palette.white100 : Palette.white50} />
    ),
  },
];

/**
 * Minimal shape of the props expo-router's `Tabs tabBar` callback provides.
 * We only consume `state` and `navigation`; declaring just these avoids a deep
 * import of the vendored react-navigation types.
 */
type TabBarNavigation = {
  navigate: (name: string) => void;
  emit: (event: {
    type: 'tabPress';
    target?: string;
    canPreventDefault: true;
  }) => { defaultPrevented: boolean };
};

type TabBarProps = {
  state: {
    index: number;
    routes: { key: string; name: string }[];
  };
  navigation: TabBarNavigation;
};

export function GlassTabBar({ state, navigation }: TabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]} pointerEvents="box-none">
      <GlassSurface
        radius={22}
        intensity={BlurIntensity.b30}
        bgColor={Palette.white5}
        borderStroke={1}
        borderColors={[Palette.white10, Palette.white0]}
        style={styles.bar}>
        <View style={styles.row}>
          {TABS.map((tab) => {
            const routeIndex = state.routes.findIndex((r) => r.name === tab.route);
            const isSelected = state.index === routeIndex;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[routeIndex]?.key,
                canPreventDefault: true,
              });
              if (!isSelected && !event.defaultPrevented) {
                navigation.navigate(tab.route);
              }
            };

            return (
              <Pressable
                key={tab.route}
                onPress={onPress}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                style={[
                  styles.item,
                  tab.fixedWidth ? styles.itemFixed : styles.itemFlex,
                  isSelected && styles.itemSelected,
                ]}>
                {isSelected && (
                  <>
                    <SelectedGlow radius={18} />
                    <SkiaGradientBorder
                      radius={18}
                      strokeWidth={1}
                      colors={[Palette.white20, Palette.white0]}
                    />
                  </>
                )}
                {tab.renderIcon(isSelected)}
                {tab.badge !== undefined && (
                  <NotificationBadge count={tab.badge} size={16} style={styles.badge} />
                )}
              </Pressable>
            );
          })}
        </View>
      </GlassSurface>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
  },
  bar: {
    borderWidth: 0.5,
    borderColor: Palette.white5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  item: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 18,
  },
  itemFixed: {
    width: 80,
  },
  itemFlex: {
    flex: 1,
    minWidth: 0,
  },
  itemSelected: {
    overflow: 'hidden',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: Palette.white20,
  },
  badge: {
    position: 'absolute',
    left: '50%',
    marginLeft: 16,
    top: 8,
  },
});

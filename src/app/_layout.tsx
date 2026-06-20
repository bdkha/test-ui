import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlassTabBar } from '@/components/tab-bar/glass-tab-bar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'Switzer-Regular': require('@/assets/fonts/Switzer-Regular.otf'),
    'Switzer-Medium': require('@/assets/fonts/Switzer-Medium.otf'),
    'Switzer-Semibold': require('@/assets/fonts/Switzer-Semibold.otf'),
  });

  const onLayout = useCallback(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#000' }} onLayout={onLayout}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Tabs
          tabBar={(props) => <GlassTabBar state={props.state} navigation={props.navigation} />}
          screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: '#000' } }}>
          <Tabs.Screen name="index" />
          <Tabs.Screen name="contacts" />
          <Tabs.Screen name="messages" />
          <Tabs.Screen name="conversations" />
          <Tabs.Screen name="discover" />
        </Tabs>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

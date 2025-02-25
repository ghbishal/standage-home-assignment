// Import  global CSS file
import '../../global.css';

import { Stack } from 'expo-router';
import { type ReactNode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="chatList" options={{ title: 'Chat List' }} />
      </Stack>
    </RootProvider>
  );
}

function RootProvider({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="flex-1">
        {children}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

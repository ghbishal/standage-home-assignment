// Import  global CSS file
import '../../global.css';
import '@/i18n/i18n';

import { Stack } from 'expo-router';
import { type ReactNode } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StandageLogo } from '@/components/standageLogo';

export default function RootLayout() {
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen
          name="(chatList)"
          options={{
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => console.log('logout and other options')}
              >
                <Image
                  className="size-10 rounded-full"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1738255594069-76385a01a31d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => <StandageLogo width={100} />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  console.log('open side drawer to language change')
                }
              >
                <Image
                  className="size-6 rounded-full"
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/2040/2040504.png',
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
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

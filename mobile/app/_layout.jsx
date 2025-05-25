import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';

export default function RootLayout() {
    // Add before journals ka stack
    // 
    // <Stack.Screen name="(auth)" />
     return <SafeAreaProvider>
              <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" />
                <Stack.Screen name="journals"/>
              </Stack>
            </SafeAreaProvider>
          
}


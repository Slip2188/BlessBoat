// app/_layout.jsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
        <Stack screenOptions={{ headerShown: false }}/>
  );
}





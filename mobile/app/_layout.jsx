// app/_layout.jsx
import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
        <Stack screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="(auth)" />
          <StatusBar style="auto" />
        </Stack>
  );
}





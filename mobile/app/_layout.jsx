import { useState, useEffect} from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuthStore } from "../store/authStore";
import { useMainStore } from "../store/mainStore";

import SplashScreenView from "../components/splash-screen"

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token, isLoading } = useAuthStore();
  // const {journalsLoaded, getJournals} = useMainStore();

  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = !!(user && token);

    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)");
    } else if (isSignedIn && inAuthScreen) {
      // Show splash after login/signup
      setShowSplash(true);
      setTimeout(() => {
        setShowSplash(false);
        router.replace("/(main)");
      }); // 1.5 seconds splash
    }
  }, [token, segments, isLoading]);

  if (isLoading && showSplash) {
    return <SplashScreenView />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />
      <Stack.Screen name="(journal)" />
    </Stack>
  );
}
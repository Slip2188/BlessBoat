// app/_layout.jsx
import { Stack, useRouter, useSegments } from "expo-router";
import {StatusBar} from "expo-status-bar";
import {useEffect} from "react"

import {useAuthStore} from "../store/authStore"

export default function RootLayout() {
  const router = useRouter()
  const segments = useSegments() // Gives which route user is currently in

  const {checkAuth, user, token} = useAuthStore()

  useEffect(()=>{
    checkAuth()
  })

  useEffect(()=>{
    const inAuthScreen = segments[0] == "(auth)"
    const isSignedIn = user && token
    if (!isSignedIn && !inAuthScreen){
      router.replace("/(auth)")
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(main)")
    }
  },[user, token, segments])

  return (
        <Stack screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(main)" />
          <Stack.Screen name="(journal)" />
          {/* <StatusBar style="auto" /> */}
        </Stack>
  );
}





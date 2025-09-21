import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function RedirectToMain() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/(main)");
  }, []);

  return null; // No UI, just redirects
}
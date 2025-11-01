import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useMainStore } from "../../store/mainStore.js";


export default function RedirectToMain() {
  const router = useRouter();
  const {setCurrentJournal} = useMainStore()

  useEffect(() => {
    setCurrentJournal([]);
    router.navigate("/(main)");
  }, []);

  return null; // No UI, just redirects
}
import styles from "../assets/styles/journal-menu"
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { useRouter } from 'expo-router';


SplashScreen.preventAutoHideAsync();


export default function JournalScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [loaded, error] = useFonts({
    'Ubuntu': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <View style={{paddingTop: insets.top, flex: 1}}>
    </View>
  );
}


import styles from "../assets/styles/journal-menu"
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();


export default function JournalScreen() {
  const insets = useSafeAreaInsets();


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
        <Text>OH MY GODDDD IT IS DA NEW ENTRYYYY</Text>
        <Link href="./journal-menu"><Text>BACK</Text></Link>
    </View>
  );
}


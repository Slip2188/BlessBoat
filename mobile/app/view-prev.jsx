import styles from "../assets/styles/view-prev"
import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets} from 'react-native-safe-area-context';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { useRouter } from 'expo-router';


import Logo from "../components/svgs/Logo"


SplashScreen.preventAutoHideAsync();


export default function ArchiveScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [loaded, error] = useFonts({
    'Ubuntu': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Borel': require('../assets/fonts/Borel-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const journalName = "Daily"


  return (
    <View style={{paddingTop: insets.top, flex: 1}}>
        <View style={styles.titleContainer}>
            <Logo width={70} height={70} color={COLOR.pink1} style={{marginBottom: 5}}/>
            <Text style={[{fontFamily:"Ubuntu"}, styles.titleContainerText]}>{journalName}'s Archive</Text>
        </View>

        <View style={styles.mainContainer}>
            
        </View>

        <View style={styles.footerContainer}>

        </View>
        
        
    </View>
  );
}


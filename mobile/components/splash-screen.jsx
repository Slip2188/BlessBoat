
import { View, Text, Animated, StyleSheet, Easing } from "react-native";
import { useEffect, useRef} from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Logo from "./svgs/Logo";
import COLOR from "../assets/styles/colors"


const SplashScreenView = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current

    const [loaded, error] = useFonts({
      'Ubuntu': require('../assets/fonts/Ubuntu-Regular.ttf'),
    });

    useEffect(() => {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,             // maps from 0 → 1
          duration: 4000,          // 4 seconds for full rotation
          useNativeDriver: true,
          easing: Easing.linear,   // smooth constant rotation
        })
      ).start();
    }, []);
  
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
  
    if (!loaded && !error) {
      return null;
    }

    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
  
    return (
      <View style={styles.splashContainer}>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <Logo
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
              color={COLOR.cream}
            />
          </Animated.View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
splashContainer: {
    flex: 1,
    backgroundColor: COLOR.magenta3, // magenta3
    justifyContent: "center",
    alignItems: "center",
},
splashText: {
    color: COLOR.cream, // cream
    fontSize: 24,
    marginTop: 50,
    fontFamily: "Ubuntu",
},
});

  
export default SplashScreenView;
  
  
  
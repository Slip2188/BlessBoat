
import { View, Text, Animated, Image, StyleSheet } from "react-native";
import { useEffect, useRef} from "react";

const SplashScreenView = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
  
    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);
  
    return (
      <View style={styles.splashContainer}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/svgs/Logo.svg")} // Replace with your logo path
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <Text style={styles.splashText}>BlessBoat</Text>
        </Animated.View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
splashContainer: {
    flex: 1,
    backgroundColor: "#FF66B2", // magenta3
    justifyContent: "center",
    alignItems: "center",
},
splashText: {
    color: "#FFF7E0", // cream
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "UbuntuBold",
},
});

  
export default SplashScreenView;
  
  
  
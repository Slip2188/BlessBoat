import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';


export default function LandingScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    console.log("Index page mounted");
  }, []);

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top, backgroundColor: "#FE7743"}]}>
      <Text>Lolo</Text>
      {/* <Button title="Journals" onPress={() => router.navigate('/journals')}></Button> */}
      <Button title="Login" onPress={() => router.navigate('/(auth)/login')}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000"
  },
});

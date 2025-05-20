import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LandingScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
      <Text>Lolo</Text>
      <Text><Link href="./(auth)/login">Login</Link></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

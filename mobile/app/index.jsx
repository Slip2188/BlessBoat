import { Text, View, Link } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View>
      <Link href='/(auth)/login'>Login</Link>
      <Link href='/(auth)/signup'>Signup</Link>
    </View>
  );
}


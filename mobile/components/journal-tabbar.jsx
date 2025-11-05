import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLOR from "../assets/styles/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomJournalTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const isFocused = (name) => state.routes[state.index]?.name === name;

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: COLOR.magenta1,
        borderTopWidth: 1,
        borderTopColor: COLOR.magenta1,
        paddingTop: 10,
        paddingBottom: insets.bottom,
      }}
    >
      {/* 📚 View Previous */}
      <TouchableOpacity
        onPress={() => navigation.navigate("view-prev")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Ionicons
          name="albums-outline"
          size={24}
          color={isFocused("view-prev") ? COLOR.pink1 : COLOR.brown1}
        />
      </TouchableOpacity>

      {/* ✏️ Index */}
      <TouchableOpacity
        onPress={() => navigation.navigate("index")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Ionicons
          name="pencil-outline"
          size={24}
          color={isFocused("index") ? COLOR.pink1 : COLOR.brown1}
        />
      </TouchableOpacity>

      {/* 📖 Redirect button */}
      <TouchableOpacity
        onPress={() => router.replace("/(main)")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Ionicons name="book-outline" size={24} color={COLOR.brown1} />
      </TouchableOpacity>
    </View>
  );
}

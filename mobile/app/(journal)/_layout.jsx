import { Tabs, useRouter } from "expo-router";
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
import COLOR from "../../assets/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { useMainStore } from "../../store/mainStore.js";
import CustomJournalTabBar from "../../components/journal-tabbar";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
  });
  const { currentJournal } = useMainStore();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLOR.magenta1,
            borderTopWidth: 1,
            borderTopColor: COLOR.magenta1,
            paddingTop: 10,
            paddingBottom: insets.bottom,
          },
          headerStyle: {
            backgroundColor: COLOR.magenta1,
            borderBottomWidth: 1,
            borderBottomColor: COLOR.magenta1,
            height: 50 + insets.top,
          },
        }}
        // TabBar Visuals only, custom 
        tabBar={(props) => <CustomJournalTabBar {...props} />}
      >
      {/* TabBar functionality (connecting them to the actual screens) */}
        <Tabs.Screen
          name="view-prev"
          options={{
            title: "",
            headerTitle: `${currentJournal[1]} Archive`,
            headerTitleStyle: {
              fontFamily: "Montserrat",
              fontSize: 24,
              color: COLOR.pink1,
            },
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Text style={{fontFamily:"Montserrat", fontSize:18, color:COLOR.brown1}}>Save</Text>
              </TouchableOpacity>
            ),
            headerTitle: `${currentJournal[1]}`,
            headerTitleStyle: {
              fontFamily: "Montserrat",
              fontSize: 24,
              color: COLOR.pink1,
            },
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <Ionicons name="arrow-back-outline" size={24} color={COLOR.brown1}></Ionicons>
              </TouchableOpacity>
            ),
            headerTitle: `${currentJournal[1]}`,
            headerTitleStyle: {
              fontFamily: "Montserrat",
              fontSize: 24,
              color: COLOR.pink1,
            },
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}

import { Tabs } from "expo-router";
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import COLOR from '../../assets/styles/colors'
import { Ionicons } from "@expo/vector-icons"



export default function TabLayout() {
    // we want journals(index), profile, and logout here
    const insets = useSafeAreaInsets()
  return <SafeAreaProvider>
          <Tabs screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: COLOR.pink1,
            tabBarInactiveTintColor:COLOR.brown1,
            tabBarStyle: {
              backgroundColor: COLOR.magenta1,
              borderTopWidth: 1,
              borderTopColor: COLOR.magenta1,
              paddingTop: 10, 
              paddingBottom:insets.bottom
            },
            }}>
            <Tabs.Screen name="profile" options={{title:"", tabBarIcon:({color, size})=>(<Ionicons name="person-outline" size={size} color={color} />)}}/>
            <Tabs.Screen name="index" options={{title:"", tabBarIcon:({color, size})=>(<Ionicons name="book-outline" size={size} color={color} />)}}/>
            <Tabs.Screen name="logout" options={{title:"", tabBarIcon:({color, size})=>(<Ionicons name="log-out-outline" size={size} color={color} />)}}/>
          </Tabs>
        </SafeAreaProvider>
}

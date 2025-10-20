import { Tabs } from "expo-router";
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import COLOR from '../../assets/styles/colors'
import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native";
import { useFonts } from 'expo-font';




export default function TabLayout() {
  // we want journals(index), profile, and logout here
  const insets = useSafeAreaInsets()
  const [loaded, error] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });
  return <SafeAreaProvider>
          <Tabs screenOptions={{
            tabBarActiveTintColor: COLOR.pink1,
            tabBarInactiveTintColor:COLOR.brown1,
            tabBarStyle: {
              backgroundColor: COLOR.magenta1,
              borderTopWidth: 1,
              borderTopColor: COLOR.magenta1,
              paddingTop: 10, 
              paddingBottom:insets.bottom
            },
            headerStyle: {
              backgroundColor: COLOR.magenta1,
              borderBottomWidth: 1,
              borderBottomColor: COLOR.magenta1,
              height: 50 + insets.top
            }
            }}>
              <Tabs.Screen name="view-prev" options={{
                    title:"", 
                    tabBarIcon:({color, size})=>(<Ionicons name="albums-outline" size={size} color={color} />),
                    headerTitle: "Daily Archive",
                    headerTitleStyle: {
                      fontFamily: "Montserrat", 
                      fontSize: 24, 
                      color: COLOR.pink1
                    }
                  }}/>
                    
                <Tabs.Screen name="index" options={{
                    title:"", 
                    tabBarIcon:({color, size})=>(<Ionicons name="pencil-outline" size={size} color={color} />),
                    headerRight: (color) => (
                        <Pressable onPress={() => console.log("Add new journal")}>
                          <Ionicons
                            name="add-outline"
                            size={30}
                            color={COLOR.brown1}
                            style={{ marginRight: 15 }}
                          />
                        </Pressable>
                      ),
                    headerTitle: "Daily",
                    headerTitleStyle: {
                      fontFamily: "Montserrat", 
                      fontSize: 24, 
                      color: COLOR.pink1
                    }
                  }}/>
                <Tabs.Screen name="journals-redirect" options={{
                    title:"", 
                    tabBarIcon:({color, size})=>(<Ionicons name="book-outline" size={size} color={color} />),
                    headerShown:false
                  }}/>
            
          </Tabs>
        </SafeAreaProvider>
}

import styles from "../../assets/styles/journal-menu"
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../../assets/styles/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();


export default function NewEntryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [loaded, error] = useFonts({
    'Ubuntu': require('../../assets/fonts/Ubuntu-Regular.ttf'),
    'Borel': require('../../assets/fonts/Borel-Regular.ttf'),
  });

  const [text, setText] = useState("");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var day = new Date().getDay();

  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
      bounces={false}
      enableOnAndroid // Adjust based on need
      extraHeight={15} // Adjust based on need
      extraScrollHeight={15} // Adjust based on need
    >

      <Text style={{fontFamily: "Borel", fontSize:20, color:COLOR.pink2, paddingLeft:20, marginTop: 20}}>{date}-{month}-{year}</Text>
      <Text style={{fontFamily: "Borel", fontSize:20, color:COLOR.pink2, paddingLeft:20}}>{week[day]}</Text>
     
      <TextInput
        style={{
          fontSize: 18,
          padding: 20,
          minHeight: 40,
          textAlignVertical: "top",
          fontFamily:"Ubuntu",
          color:COLOR.brown3
        }}
        autoFocus={true}
        dataDetectorTypes={"all"}
        backgroundColor={COLOR.white}
        inlineImagePadding={10}
        placeholderTextColor={COLOR.brown1}
        placeholder="Write your journal entry..."
        value={text}
        onChangeText={setText}
        multiline
        selectionColor={COLOR.brown1}
  
      />
    </KeyboardAwareScrollView>
  );
}


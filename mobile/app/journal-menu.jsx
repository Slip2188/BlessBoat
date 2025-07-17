import styles from "../assets/styles/journal-menu"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../assets/styles/colors";
import Bookmark from "../components/svgs/journal-menu/bookmark";
import HeartDoodle from "../components/svgs/journal-menu/heart-doodle";
import Scribble from "../components/svgs/journal-menu/scribble";
import SmileyDoodle from "../components/svgs/journal-menu/smiley-doodle";
import CircleDoodle from "../components/svgs/journal-menu/circle.jsx";
import FillCircle from "../components/svgs/journal-menu/fill-circle.jsx";
import NextArrow from "../components/svgs/journal-menu/next-arrow.jsx"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState, useCallback} from 'react';
// import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();


export default function JournalMenuScreen() {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const journalName= "Daily"

  const [loaded, error] = useFonts({
    'Borel': require('../assets/fonts/Borel-Regular.ttf'),
    'Ubuntu': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
  // useFocusEffect(
  //   useCallback(() => {
  //     setSelected(null); // or set to default like 'write'
  //   }, [])
  // );
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("Focused: journal-menu");
  //     return () => console.log("Unfocused: journal-menu");
  //   }, [])
  // );

  if (!loaded && !error) {
    return null;
  }


  

  const options = [
    { key: 'view-prev', label: `View ${journalName}'s archive and analysis`, color: COLOR.magenta3},
    { key: 'write-new', label: 'Write an entry for today', color: COLOR.purplyblue2},
    { key: 'journals', label: 'Choose another journal', color: COLOR.magenta2}
  ];

  return (
    <View style={[styles.container, {flex: 1}]}>

        <Image source={require("../assets/images/other/journal-menu/notebook-lines.png")} style={styles.notebooklines}/>


        <View style={styles.bookmarkcontainer}>
          <Bookmark color={COLOR.magenta2} width={70} height={700} style={{position: "absolute", right: 0}}/>
          <View style={styles.bookmarktextcontainer}>
            {journalName.split('').map((letter, letterIndex) => (
              <Text key={letterIndex} style={styles.bookmarktext}>
                {letter}
              </Text>
            ))}
          </View>
        </View>


        <View style={[{paddingTop: insets.top},styles.maincontainer]}>

          <View style={styles.todo_container}>
            <Scribble width={44} height={30} style={{alignSelf:"flex-end", marginTop: 50, marginRight: 10,transform: [{rotate: '20deg'}]}}/>
            <Text style={[styles.text, {paddingTop: 20}]}>Choose a task</Text>
          </View>

          {options.map((option) => (  
          <TouchableOpacity style={styles.option_container} key={option.key} onPress={() => setSelected(option.key)}>
            <View style={{flex:1, alignItems:"flex-end", marginTop:5, zIndex:0}} >
              {selected === option.key &&
              <FillCircle width={20} height={20} color={option.color} style={{alignSelf:"flex-start", position:"absolute", left:15,  transform: [{rotate: '20deg'}]}}/>}
              <CircleDoodle width={20} height={20} color={option.color} style={{alignSelf:"flex-start", position:"absolute", left:15,  transform: [{rotate: '20deg'}]}}/>
            </View>
            <View style={{flex: 6}}><Text style={[styles.text, styles.body_text,{color: option.color, flex: 5}]}>{option.label}</Text></View>
          </TouchableOpacity>
          ))}

          <View style={styles.doodles_container}>
            { selected != null && <TouchableOpacity onPress={() => router.navigate(`/${selected}`)} style={{position: "absolute", top: -70, left:"35%"}}><NextArrow width={75} height={21} color={COLOR.brown3} /></TouchableOpacity>}
            <SmileyDoodle height={50} width={53} style={{position: "absolute", bottom: 50}}/>
            <HeartDoodle height={45} width={63} style={{position: "absolute", top: 0, right: 10, transform: [{rotate: '20deg'}]}}/>
          </View>

        </View>

    </View>
  );
}


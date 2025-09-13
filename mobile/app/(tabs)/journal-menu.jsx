import styles from "../../assets/styles/journal-menu.jsx"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../../assets/styles/colors.jsx";
import Bookmark from "../../components/svgs/journal-menu/bookmark.jsx";
import HeartDoodle from "../../components/svgs/journal-menu/heart-doodle.jsx";
import Scribble from "../../components/svgs/journal-menu/scribble.jsx";
import SmileyDoodle from "../../components/svgs/journal-menu/smiley-doodle.jsx";
import CircleDoodle from "../../components/svgs/journal-menu/circle.jsx";
import FillCircle from "../../components/svgs/journal-menu/fill-circle.jsx";
import NextArrow from "../../components/svgs/journal-menu/next-arrow.jsx"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState, useCallback} from 'react';
// import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();


export default function JournalMenuScreen() {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState("write-new");
  const router = useRouter();

  const journalName= "Daily"

  const [loaded, error] = useFonts({
    'Borel': require('../../assets/fonts/Borel-Regular.ttf'),
    'Ubuntu': require('../../assets/fonts/Ubuntu-Regular.ttf'),
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
    { key: 'view-prev', label: "View Archive", color: COLOR.magenta3},
    { key: 'write-new', label: 'Write Entry', color: COLOR.purplyblue2},
    { key: 'del-joural', label: 'Delete Journal', color: COLOR.magenta1}
  ];

  return (
    <View style={[styles.container, {flex: 1}]}>

        <Image source={require("../../assets/images/other/journal-menu/notebook-lines.png")} style={styles.notebooklines}/>


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
            <Text style={[styles.text, {paddingTop: 20, flexWrap:"wrap"}]}>Choose a task</Text>
          </View>

          {options.map((option) => (  
          <TouchableOpacity activeOpacity={1} style={styles.option_container} key={option.key} onPress={() => setSelected(option.key)}>
            <View style={{flex:1, marginTop:5, zIndex:0, alignItems:"center", justifyContent:"center"}} >
              {selected === option.key &&
              <FillCircle width={20} height={20} color={option.color} style={{alignSelf:"flex-end", transform: [{rotate: '20deg'}], marginRight:20}}/>}
              <CircleDoodle width={20} height={20} color={option.color} style={{alignSelf:"flex-end", position:"absolute",transform: [{rotate: '20deg'}], marginRight:20}}/>
            </View>
            <View style={{flex: 3, justifyContent:"center", paddingTop:20}}><Text style={[styles.text, styles.body_text,{color: option.color}]}>{option.label}</Text></View>
          </TouchableOpacity>
          ))}

          <View style={styles.doodles_container}>
            { selected != null && <TouchableOpacity activeOpacity={1} onPress={() => router.navigate(`/${selected}`)} style={{position: "absolute", left:"35%"}}><NextArrow width={75} height={21} color={COLOR.brown3} /></TouchableOpacity>}
            <SmileyDoodle height={50} width={53} style={{position: "absolute", bottom: 50}}/>
            <HeartDoodle height={45} width={63} style={{position: "absolute", top: 40, right: 10, transform: [{rotate: '20deg'}]}}/>
          </View>

        </View>

    </View>
  );
}


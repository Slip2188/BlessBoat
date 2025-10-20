import styles from "../../assets/styles/journals"
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../../assets/styles/colors";
import Logo from "../../components/svgs/Logo";
import Flowerpot from "../../components/svgs/journals/flowerpot";
import Bookend from "../../components/svgs/journals/bookend";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import { useRouter } from 'expo-router';

import AddJournalModal from '../../components/add-journal';
// import { useFocusEffect } from '@react-navigation/native';
// import {useCallback} from 'react';


SplashScreen.preventAutoHideAsync();

const flowerpotSizeRatio = 2.5

const journals = ["daily", "ritika", "work", "igloo", "pinga"]
const journalColors = [[COLOR.magenta3, COLOR.magenta2], [COLOR.teal1, COLOR.teal2], [COLOR.cherry1, COLOR.cherry2], [COLOR.grayblue1, COLOR.grayblue2], [COLOR.blue1, COLOR.blue2]]

export default function JournalScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false);
  const [journalName, setJournalName] = useState('');

  const [loaded, error] = useFonts({
    'Ubuntu': require('../../assets/fonts/Ubuntu-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
    // useFocusEffect(
    //   useCallback(() => {
    //     console.log("Focused: journals");
    //     return () => console.log("Unfocused: journals");
    //   }, [])
    // );

 const handleAddJournal = () => {
    console.log('New Journal:', journalName);
    // your logic to save or update the list goes here
    setModalVisible(false);
    setJournalName('');
  };
  


  return (
    <View style={[styles.container, {paddingTop: insets.top, flex: 1}]}>

      <View style={[styles.container, styles.toparea]}>
        <Logo width={100} height={100} color={COLOR.magenta1} />
        <Text style={styles.topareaText}>Pick a Journal to write in today</Text>
      </View>


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.container, styles.middlearea]}>
          {journals.map((name, nameIndex)=>(
            <TouchableOpacity activeOpacity={1} onPress={() => router.navigate('/(journal)')} key={nameIndex} style={{position: "relative", alignSelf: "flex-end"}}>
              <View style={[styles.journalcover, {backgroundColor: journalColors[nameIndex%5][1]}]}>
                  <View style={[styles.journal, {backgroundColor: journalColors[nameIndex%5][0]}]}>
                    <View style={[styles.journalribbon, {backgroundColor: journalColors[nameIndex%5][1]}]}></View>
                    <View style={styles.journaltitlecontainer}>
                      {name.split('').map((letter, letterIndex) => (
                        <Text key={letterIndex} style={styles.journaltitle}>
                          {letter}
                        </Text>
                      ))}
                    </View>
                  </View>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{position: "relative",alignSelf: "flex-end", marginRight: 150}}>
            <Bookend height={100} width={100}/>
          </TouchableOpacity>
          <Flowerpot height={Math.ceil(110*flowerpotSizeRatio)} width={Math.ceil(45*flowerpotSizeRatio)} style={{position: "absolute",right: 5, bottom: 0}}/>
        </View> 
        <AddJournalModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAdd={handleAddJournal}
          journalName={journalName}
          setJournalName={setJournalName}
        /> 
      </ScrollView>


      <View style={[styles.container, styles.bottomarea]}/>

    </View>
  );
}


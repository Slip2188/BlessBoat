import styles from "../../assets/styles/journals"
import { ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../../assets/styles/colors";
import Logo from "../../components/svgs/Logo";
import Flowerpot from "../../components/svgs/journals/flowerpot";
import Bookend from "../../components/svgs/journals/bookend";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState, useRef} from 'react';
import { useRouter } from 'expo-router';

import AddJournalModal from '../../components/add-journal';
import {useAuthStore} from "../../store/authStore"
import { API_URL } from "../../constants/api.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFocusEffect } from '@react-navigation/native';
// import {useCallback} from 'react';


SplashScreen.preventAutoHideAsync();

const flowerpotSizeRatio = 2.5

const journalColors = [[COLOR.magenta3, COLOR.magenta2], [COLOR.teal1, COLOR.teal2], [COLOR.cherry1, COLOR.cherry2], [COLOR.grayblue1, COLOR.grayblue2], [COLOR.blue1, COLOR.blue2]]

export default function JournalScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState(false);
  const [journalName, setJournalName] = useState('');
  const [loading, setLoading] = useState(false)
  const [supMessage, setSupMessage] = useState("")
  const textInputRef = useRef(null);
  const [journals, setJournals] = useState();

  const {token, user} = useAuthStore()

  const getJournals = async () => {
    try {
      const response = await fetch(`${API_URL}/journal`, {         
        headers: { Authorization: `Bearer ${token}` },       
      });
      const data = await response.json();
      setJournals(data)

      if (!response.ok) throw new Error(data.message || "Failed to fetch journals");
    } catch (error) {
      console.log("Error fetching books", error);
    }
  }

  useEffect(() => {
    if (token) {
      getJournals()
    }
  }, [token])

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

  const handleAddJournal = async () => {

    if (journalName.length > 8) {
      setSupMessage("Limit Name to 8 Characters")
      return;
    }
    
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/journal`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ journalName }),
      });
      

      const data = await response.json()

      //debugging
      // console.log("Response status:", response.status)
      // console.log("Response body:", data)
      // console.log("Token literal:", JSON.stringify(token))



      if (!response.ok) throw new Error(data.message || "Something went wrong")
      
      Alert.alert(`Successfully added ${journalName}!`)
      setModalVisible(false);
      setJournalName('');
      setSupMessage("")
      getJournals()

    } catch (error) {
      console.error ("Error creating post:", error);
      Alert. alert ("Error", error.message || "Something went wrong");
    } finally {
      textInputRef.current.clear();
      setLoading(false);
      
    }
    
  };
  


  return (
    <View style={[styles.container, {paddingTop: insets.top, flex: 1}]}>

      <View style={[styles.container, styles.toparea]}>
        <Logo width={100} height={100} color={COLOR.magenta1} />
        <Text style={styles.topareaText}>Pick a Journal to write in today</Text>
      </View>


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.container, styles.middlearea]}>
          {journals ? journals.map((journal, nameIndex)=>(
            <TouchableOpacity activeOpacity={1} onPress={() => router.navigate('/(journal)')} key={nameIndex} style={{position: "relative", alignSelf: "flex-end"}}>
              <View style={[styles.journalcover, {backgroundColor: journalColors[nameIndex%5][1]}]}>
                  <View style={[styles.journal, {backgroundColor: journalColors[nameIndex%5][0]}]}>
                    <View style={[styles.journalribbon, {backgroundColor: journalColors[nameIndex%5][1]}]}></View>
                    <View style={styles.journaltitlecontainer}>
                      {journal.name.split('').map((letter, letterIndex) => (
                        <Text key={letterIndex} style={styles.journaltitle}>
                          {letter}
                        </Text>
                      ))}
                    </View>
                  </View>
              </View>
            </TouchableOpacity>
          )):null}
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
          supMessage={supMessage}
          textInputRef={textInputRef}
        /> 
      </ScrollView>


      <View style={[styles.container, styles.bottomarea]}/>

    </View>
  );
}


import styles from "../../assets/styles/(auth)/auth"
import { TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, Alert, ActivityIndicator} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from "../../assets/styles/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { useRouter } from 'expo-router';
import { useState} from "react"
import { useAuthStore } from "../../store/authStore";
import { useMainStore } from "../../store/mainStore";

import Logo from "../../components/svgs/Logo"

import { Ionicons } from "@expo/vector-icons"


SplashScreen.preventAutoHideAsync();


export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const[showPassword, setShowPassword] = useState(false);
  
  const {token, isLoading, login} = useAuthStore()
  const {getJournals} = useMainStore()

  const handleLogin = async () => {
    // console.log(email, password)
    const result = await login(email, password)
    if (token) await getJournals()
    if (!result.success) Alert.alert("Error", result.error)
  }

  const [loaded, error] = useFonts({
    'Ubuntu': require('../../assets/fonts/Ubuntu-Regular.ttf'),
    'UbuntuBold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
    'Monstserrat':require('../../assets/fonts/Montserrat-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    <View style={{paddingTop: insets.top, flex: 1, backgroundColor:COLOR.magenta3}}>
        <View style={styles.title}>
            <Logo height={80} width={80} color={COLOR.pink2}/>
            <Text style={{fontFamily:"UbuntuBold", fontSize:55, color:COLOR.cream, marginTop:20}}>blessboat</Text>
            <Text style={{fontFamily:"Montserrat", fontSize:15, color:COLOR.cream}}>COUNT YOUR BLESSINGS</Text>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.formcontainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={COLOR.pink2}
              value={email} onChangeText={setEmail}
              keyboardType="email-address" 
              autoCapitalize="none"
            />

            <View style={{display:"flex", flexDirection:"row", alignSelf:"center"}}>
              <TextInput
                  style={styles.input}
                  placeholderTextColor={COLOR.pink2}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
              />
                <TouchableOpacity onPress={()=>{setShowPassword(!showPassword)}} style={{position:"absolute", right:10, top:15}} >
                  <Ionicons name={showPassword? "eye" : "eye-off"} color={COLOR.pink2} style={{fontSize:20}}/> 
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginbutton}
                disabled={isLoading} onPress={handleLogin}>
                {isLoading ? (
                <ActivityIndicator color={COLOR.cream} />
                ): (
                <Text style={styles.buttonText}>Login</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity><Text style={{fontFamily:"Ubuntu", fontSize:12, color:COLOR.cream, boxShadow:COLOR.grey}}>Forgot Password?</Text></TouchableOpacity>
        </KeyboardAvoidingView>

        <View style={styles.footercontainer}>
          <Text style={{color:COLOR.cream, fontSize:15, fontFamily:"Ubuntu", marginRight:5}}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>{router.push("/(auth)/signup")}}><Text style={{color:COLOR.pink2, fontSize:20, fontFamily:"Ubuntu-Bold", paddingBottom:5}} >Sign Up</Text></TouchableOpacity>
        </View>

    </View>
  );
}


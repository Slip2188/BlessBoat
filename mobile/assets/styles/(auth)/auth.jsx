import {StyleSheet} from 'react-native';
import COLOR from "../colors";

const styles = StyleSheet.create({
    title: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    }, 
    formcontainer: {
        flex: 1,
        alignItems:"center", 
        justifyContent:"center"
    },
    input: {
        width: "80%", 
        height: 50, 
        borderWidth: 2, 
        borderColor: COLOR.pink2, 
        borderRadius: 15,
        marginBottom: 20, 
        alignSelf:"center", 
        fontFamily: "Ubuntu", 
        padding: 10, 
        backgroundColor: COLOR.grey,
        color: COLOR.magenta1, 
        fontSize: 15
    },
    loginbutton:{
        borderRadius: 30,
        backgroundColor: COLOR.pink2, 
        width: "80%", 
        height: 40, 
        alignItems:"center", 
        justifyContent:"center", 
        marginBottom:20
    },
    buttonText:{
        color: COLOR.cream,
        fontSize: 15, 
        fontFamily:"Montserrat"
    },
    footercontainer: {
        flex: 1, 
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent:"center"
    }
})

export default styles;
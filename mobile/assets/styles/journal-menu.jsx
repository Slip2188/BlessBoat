import {StyleSheet} from 'react-native';
import COLOR from "./colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.cream,
        position:"relative",
        flexDirection: "row",
        fontFamily: 'Borel'
    },
    notebooklines: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    bookmarkcontainer: {
        flex: 1, 
        alignItems: "flex-end"

    },
    bookmarktextcontainer: {
        alignItems: "center",
        position: "absolute",
        right: 0, 
        width: 70,
        height: 700,
        justifyContent: "center",
    },
    bookmarktext: {
        fontSize: 30,
        fontFamily: "Ubuntu",
        textTransform: "capitalize",
        color: COLOR.cream
    },
    maincontainer: {
        flex: 3, 
        paddingRight:5
    },
    text: {
        fontFamily: "Borel",
        fontSize: 35,
        textAlign: "center",
        color: COLOR.brown3,
        
    },
    body_text: {
        textAlign: "left",
        fontSize: 20,
    },
    todo_container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 40
    },
    option_container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row"
    },
    doodles_container:{
        flex: 1, 
        marginTop: 25
    }
})

export default styles;
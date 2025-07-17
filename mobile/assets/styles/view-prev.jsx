import {StyleSheet} from 'react-native';
import COLOR from "./colors";

const styles = StyleSheet.create({
    titleContainer : {
        alignItems:"center",
        justifyContent:"center",
        flex: 1
    },
    titleContainerText : {
        fontSize: 35,
        color: COLOR.pink1
    },
    mainContainer : {
        flex: 3,
        backgroundColor: "#678798"
    },
    footerContainer : {
        flex: 1
    }
})

export default styles;
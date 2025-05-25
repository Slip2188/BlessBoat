import { ScrollView, Text, StyleSheet, View } from 'react-native';
import COLOR from "./colors";

const journalHeight = "300"
const journalWidth = "100"
const ribbonWidth = Math.floor(Number(journalWidth)/3)
const ribbonHeight = Number(journalHeight)/5

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    backgroundColor: COLOR.cream,
    paddingBottom: 0
  },
  toparea: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  topareaText: {
    fontFamily: "Ubuntu",
    fontSize: 30,
    color: COLOR.purplyblue2,
    textAlign:"center",
    marginTop: 25,
    width: "75%"
  },
  middlearea: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex"
  },
  bottomarea: {
    flex: 1,
    backgroundColor: COLOR.purplyblue2
  },

  journalcover: {
    height: journalHeight,
    width: journalWidth,
    borderRadius: 12,
    position: "relative",
    alignSelf: "flex-end"
  },

  journal: {
    height: journalHeight,
    width: "auto", 
    borderRadius: 12,
    marginLeft: "5",
    marginRight: "5",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },

  journalribbon :{
    height: ribbonHeight,
    width: ribbonWidth, 
    position: 'absolute',
    left: "33%",
    top:"-2",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30
  },

  journaltitlecontainer: {
    marginTop: ribbonHeight/2,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },

  journaltitle: {
    textTransform: "capitalize",
    fontFamily: "Ubuntu",
    fontSize: 22,
    color: COLOR.cream
  }
});

export default styles;
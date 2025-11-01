import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';



const DelJournalModal = ({
  visible,
  onClose,
  onDel, 
  journalName
}) => {
  const [loaded, error] = useFonts({
    'Ubuntu': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete {journalName}?</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onClose}  >
              <Text style={[styles.button, {color:COLOR.green}]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDel} >
              <Text style={[styles.button, {color:COLOR.pink1}]}>Delete</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DelJournalModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: COLOR.cream,
    width: '80%',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 5,
    textAlign:'center',
    color: COLOR.brown3,
    fontFamily: "Ubuntu"
  },
  modalError:{
    color: COLOR.pink1,
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center", 
    fontFamily: "Ubuntu"
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    fontFamily:"Ubuntu",
    fontSize: 20,
    marginTop: 10
  }
});

import React from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';



const AddJournalModal = ({
  visible,
  onClose,
  onAdd,
  journalName,
  setJournalName,
  supMessage,
  textInputRef
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
          <Text style={styles.modalTitle}>Add a new Journal</Text>
          <Text style={styles.modalError}>{supMessage}</Text>

          <TextInput
            placeholder="Enter journal name"
            placeholderTextColor={COLOR.brown2}
            style={styles.input}
            value={journalName}
            onChangeText={setJournalName}
            selectionColor= {COLOR.brown3}
            ref={textInputRef}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onClose}  >
              <Text style={[styles.button, {color:COLOR.pink1}]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onAdd} >
              <Text style={[styles.button, {color:COLOR.green}]}>Add</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddJournalModal;

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
    fontWeight: '600',
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
  input: {
    borderWidth: 1,
    borderColor: COLOR.brown2,
    backgroundColor: COLOR.cream,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontFamily: "Ubuntu",
    color: COLOR.brown3
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    fontFamily:"Ubuntu",
    fontSize: 18
  }
});

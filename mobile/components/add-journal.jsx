import React from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';
import COLOR from "../assets/styles/colors";
import { useFonts } from 'expo-font';



const AddJournalModal = ({
  visible,
  onClose,
  onAdd,
  journalName,
  setJournalName
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

          <TextInput
            placeholder="Enter journal name"
            style={styles.input}
            value={journalName}
            onChangeText={setJournalName}
          />

          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} />
            <Button
              title="Add"
              onPress={onAdd}
              disabled={!journalName.trim()}
            />
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
    backgroundColor: COLOR.magenta1,
    width: '80%',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: COLOR.pink1,
    backgroundColor: COLOR.cream,
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

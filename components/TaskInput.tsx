import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskInputProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (text: string) => void;
}

const TaskInput = ({ visible, onClose, onAddTask }: TaskInputProps) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (!text.trim()) {
      alert("Por favor, insira uma tarefa.");
      return;
    }
    
    onAddTask(text); // Envia o texto para o componente pai (Index)
    setText(""); // Limpa o input
    onClose(); // Fecha o modal
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>New Task</Text>
          
          <TextInput
            placeholder="What do you need to do?"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} color="#FF6347" />
            <Button title="Add" onPress={handleAddTask} color="#1E90FF" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default TaskInput;
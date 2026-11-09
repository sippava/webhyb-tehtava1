import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function App() {
  // Tilamuuttuja tarkistelee onko modaali ikkuna auki vai ei. Oletuksena se on suljettu (false)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Pääkomponentti  */}
      {/* Klikattava komponentti, joka avaa modaalin */} 
      <Pressable onPress={() => setModalVisible(true)}> 
        <Text style={styles.textButton}>Show modal message</Text>
      </Pressable>

      {/* Modal-komponentti eli popup-ikkuna periaatteessa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Back-up nappi androidilla, sulkee modaalin. Eli muuttaa tilan falseksi. 
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            
            {/* Close-painike modaalin sisällä eli sulkemishommaa */}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
//Tyylittelyä. Yritetty hakea samanlaista tyyliä kuin tehtävänannossa. 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: '#007AFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
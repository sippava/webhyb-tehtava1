
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>(""); //Tallentaa käyttäjän iän ja aluksi se on tyhjä.

  const ageAsNumber: number = !isNaN(Number(age)) && age !== "" ? Number(age) : 0; //Muutetaan syötetty ikä numeroksi, jos se on kelvollinen, muuten asetetaan 0.

  const lower: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.65 : 0; //Alaraja
  const upper: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.85 : 0; //Yläraja

  return ( //Palautellaan elementtei.
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate limits</Text> //Otsikko

      <Text>Age:</Text> //Ikä tekstikenttä

      <TextInput
        style={styles.input}
        placeholder="Enter your age" //Syöttökenttä
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.text}>
        Lower limit: {lower.toFixed(0)} bpm // Alaraja
      </Text> //Tulokset pyöristyy kokonaisluvuksi.

      <Text style={styles.text}>
        Upper limit: {upper.toFixed(0)} bpm // Yläraja
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({  //Päätyylit
  container: {
    flex: 1,
    margin: 16
  },
  heading: { //Otsikko
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16
  },
  input: {    // Syöttökenttä
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 8
  },
  text: {  //Sykerajan teksti
    marginVertical: 16
  }
});

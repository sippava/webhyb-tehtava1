
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>(""); // Tallentaa käyttäjän iän. Aluksi tyhjä.

  // Muutetaan syötetty ikä numeroksi. Jos se ei ole kelvollinen, asetetaan 0.
  const ageAsNumber: number = !isNaN(Number(age)) && age !== "" ? Number(age) : 0;

  const lower: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.65 : 0; // Alaraja
  const upper: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.85 : 0; // Yläraja

  // Palautetaan sovelluksen näytöllä näkyvät elementit.
  return (
    <View style={styles.container}>
      {/* Sovelluksen otsikko */}
      <Text style={styles.heading}>Heart rate limits</Text>

      {/* Ikä tekstikentän otsikkona */}
      <Text>Age:</Text>

      {/* Käyttäjä syöttää ikänsä tähän kenttään */}
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Näytetään laskettu sykkeen alaraja kokonaislukuna */}
      <Text style={styles.text}>
        Lower limit: {lower.toFixed(0)} bpm
      </Text>

      {/* Näytetään laskettu sykkeen yläraja kokonaislukuna */}
      <Text style={styles.text}>
        Upper limit: {upper.toFixed(0)} bpm
      </Text>
    </View>
  );
}

// Määritellään sovelluksen ulkoasuun liittyvät tyylit.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 8
  },
  text: {
    marginVertical: 16
  }
});

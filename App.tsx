
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");

  const ageAsNumber: number = !isNaN(Number(age)) && age !== "" ? Number(age) : 0;

  const lower: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.65 : 0;
  const upper: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate limits</Text>

      <Text>Age:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.text}>
        Lower limit: {lower.toFixed(0)} bpm
      </Text>

      <Text style={styles.text}>
        Upper limit: {upper.toFixed(0)} bpm
      </Text>
    </View>
  );
}

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

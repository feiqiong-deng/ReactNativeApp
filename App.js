import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello there!");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Tap to change"
        onPress={() => setOutputText("Have a great day!")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

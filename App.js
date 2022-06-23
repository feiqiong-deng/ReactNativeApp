import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Type here!"
          style={{
            height: 40,
            borderColor: "blue",
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

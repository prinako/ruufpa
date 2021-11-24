import React from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";

function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>hi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text>hi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text>hi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2C2E43",
    height: 70,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    width: 70,
    borderRadius: 10,
  },
});

export default NavBar;

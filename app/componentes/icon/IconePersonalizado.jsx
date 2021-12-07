import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IconePersonalizado(props) {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Image
        style={styles.icon}
        source={require("../../assets/ru-digital-icon.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 50,
    left: "41.5%",
    top: "-60%",
    overflow: "hidden",
  },
  icon: {
    backgroundColor: "#FFCC1D",
    width: 90,
    height: 90,
  },
});

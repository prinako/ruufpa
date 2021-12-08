
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

export default function Head() {
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/logo-ru.jpg")} />
        <Text style={styles.text}>RU DIGITAL</Text>
        <Image
          style={styles.image}
          source={require("../../assets/logo-ufpa.png")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC1D",
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding:5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});


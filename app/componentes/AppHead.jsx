import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";

function AppHead() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-ru.jpg")} />
      <Text style={styles.text}>RU UFPA</Text>
      <Image style={styles.image} source={require("../assets/logo-ufpa.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC1D",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default AppHead;

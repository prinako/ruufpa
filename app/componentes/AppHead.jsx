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
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom:6,
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo-ru.jpg")} />
        <Text style={styles.text}>RU DIGITAL</Text>
        <Image
          style={styles.image}
          source={require("../assets/logo-ufpa.png")}
        />
      </View>
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

export default AppHead;

import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import Botao from "./Botao";
import IconePersonalizado from "./icon/IconePersonalizado";

function NavBar(props) {

  const { onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Botao name="menu" onPress={() => onPress.push("Menu")} />
        <Botao name="map" onPress={() => onPress.push('Mapa')} />
      </View>
      <IconePersonalizado onPress={() => onPress.push("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#2C2E43",
    height: 60,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default NavBar;

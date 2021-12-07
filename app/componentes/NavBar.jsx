import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import Botao from "./Botao";
import IconePersonalizado from "./icon/IconePersonalizado";

function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Botao name="menu" onPress={() => Alert.alert("Botão de Menu")} />
        <Botao name="map" onPress={() => Alert.alert("Botão de Map")} />
      </View>
      <IconePersonalizado onPress={() => Alert.alert("Cardápios da semana")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#2C2E43",
    height: 70,
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

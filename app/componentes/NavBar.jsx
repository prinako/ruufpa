import React from "react";
import {
  View,
  StyleSheet,
  Alert,
} from "react-native";

import Botao from "./Botao";

function NavBar() {
  return (
    <View style={styles.container}>
      <Botao name="menu" onPress={() => Alert.alert("Botão de Menu")}/>
      <Botao name="search" onPress={() => Alert.alert("Botão de Pesquisas")} />
      <Botao name="map" onPress={() => Alert.alert("Botão de Map")} />
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
});

export default NavBar;

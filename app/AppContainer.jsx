import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import AppHead from "./componentes/AppHead";
import Dashboard from "./componentes/Dashboard";
import NavBar from "./componentes/NavBar";
import Map from "./componentes/mapa/Map";

export default function AppContainer() {
  const [ mapa, setMapa ] = useState(false);

  function controleMapa() {
    setMapa((p)=> !p);
  }

  return (
    <View style={styles.container}>
      <AppHead />
      {mapa ? <Map/> : <Dashboard />}
      <NavBar onMapa={controleMapa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

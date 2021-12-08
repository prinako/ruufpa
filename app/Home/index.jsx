import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import AppHead from "../componentes/AppHead/Head";
import Dashboard from "../componentes/Dashboard";
import NavBar from "../componentes/NavBar";

export default function Home({navigation}) {
  const [ mapa, setMapa ] = useState(false);

  function controleMapa() {
    setMapa((p)=> !p);
  }

  return (
    <View style={styles.container}>
      <AppHead />
       <Dashboard />
      <NavBar onMapa={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

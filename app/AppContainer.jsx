import React from "react";
import { StyleSheet, View, StatusBar, Platform} from "react-native";

import AppHead from "./componentes/AppHead";
import Dashboard from "./componentes/Dashboard";
import NavBar from "./componentes/NavBar";

export default function AppContainer() {
  return (
    <View style={styles.container}>
      <AppHead />
      <Dashboard/>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Head from "../AppHead/Head";
import Fila from "../fila/Fila";
import Dashboard from "../Dashboard";
import EstaNaFila from "../Perguntas/EstaNaFila";
import NavBar from "../NavBar";

export default function Home({ navigation }) {
  const [respo, setRospo] = useState(true);

  function handleOnPress() {
    setRospo((p) => !p);
  }

  return (
    <View style={styles.container}>
      <Head />
      {respo && <EstaNaFila onPress={handleOnPress} />}
      <Dashboard />
      <NavBar onPress={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4ED",
  },
});

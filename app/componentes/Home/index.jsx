import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Head from "../AppHead/Head";
import Dashboard from "../Dashboard";
import EstaNaFila from "../Perguntas/EstaNaFila";
import NavBar from "../NavBar";

export default function Home({ navigation }) {
  const [respo, setRospo] = useState(true);
  const [estaNaFila, setEstaNaFila] = useState(false);
  const [vaiParaRu, setVaiParaRu] = useState(false);

  /* Função para controlar as perguntas */
  function handleOnPress() {
    if (estaNaFila) {
      setEstaNaFila((p) => !p);
    }
    if (respo) {
      setRospo((p) => !p);
    }
    if (vaiParaRu) {
      setVaiParaRu((p) => !p);
    }
  }
  function handleEstaNaFila() {
    if (respo) {
      setRospo((p) => !p);
      setEstaNaFila((p) => !p);
    }
    if (estaNaFila) {
      setEstaNaFila((p) => !p);
      setVaiParaRu((p) => !p);
    }
    vaiParaRu && setVaiParaRu((p) => !p);
  }

  return (
    <View style={styles.container}>
      <Head />
      {respo && (
        <EstaNaFila
          onPressSim={handleOnPress}
          onPressNao={handleEstaNaFila}
          pergunta="VOCÊ ESTÁ NO RU"
        />
      )}
      {estaNaFila && (
        <EstaNaFila
          onPressSim={handleOnPress}
          onPressNao={handleEstaNaFila}
          pergunta="VOCÊ ESTÁ NA FILA"
        />
      )}
      {vaiParaRu && (
        <EstaNaFila
          onPressSim={handleOnPress}
          onPressNao={handleEstaNaFila}
          pergunta="VOCÊ VAI PARA RU HOJE"
        />
      )}
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

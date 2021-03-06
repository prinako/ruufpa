import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function TipoDeComida() {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require("../imagems/comida1.jpg")}
        />
      </View>
      <View style={styles.text_container}>
        <View style={styles.titilo_do_cardapio}>
          <Text style={{ fontWeight: "bold" }}>LINGUIÇA ASSADA</Text>
        </View>
        <View style={{ height: "100%" }}>
          <Text styles={{ fontSize: 16, adjustFontSizeToFit: "true" }}>
            ARROZ BRANCO
          </Text>
          <Text styles={{ fontSize: 16, adjustFontSizeToFit: "true" }}>
            FEIJÃO COM ABÓBORA E REPOLHO
          </Text>
          <Text styles={{ fontSize: 16, adjustFontSizeToFit: "true" }}>
            FAROFA
          </Text>
          <Text styles={{ fontSize: 16, adjustFontSizeToFit: "true" }}>
            CENOURA A VICK
          </Text>
          <Text styles={{ fontSize: 16, adjustFontSizeToFit: "true" }}>
            LARANJA
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F3F4ED",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  image_container: {
    width: "40%",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  text_container: {
    backgroundColor: "#fffc",
    paddingLeft: 15,
    flex: 1,
  },
  titilo_do_cardapio: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default TipoDeComida;

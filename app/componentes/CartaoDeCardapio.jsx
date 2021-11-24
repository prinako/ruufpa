import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function CartaoDeCardapio() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../imagems/comida1.jpg")} />
      <View style={styles.text_container}>
        <View style={styles.titilo_do_cardapio}>
          <Text style={{ fontWeight: "bold" }}>LINGUIÇA ASSADA</Text>
        </View>
        <Text>ARROZ BRANCO</Text>
        <Text>FEIJÃO COM ABÓBORA E REPOLHO</Text>
        <Text>FAROFA</Text>
        <Text>CENOURA A VICK</Text>
        <Text>LARANJA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F3F4ED",
    height: 120,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "40%",
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
    height: 20,
    marginBottom: 10,
  },
});

export default CartaoDeCardapio;

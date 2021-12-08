import React from "react";
import { View, StyleSheet, Text } from "react-native";

import TipoDeComida from "./TipoDeComida";
import Data from "../Data";

export default function CartaoDeCardapio(props) {
  const { periodo } = props;

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{periodo}</Text>
      </View>
      <TipoDeComida data={Da} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  text_container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 20,
  },
});

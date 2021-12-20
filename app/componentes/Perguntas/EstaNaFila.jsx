import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function EstaNaFila(props) {
    const {onPressSim, onPressNao, pergunta} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#2C2E43",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>{pergunta}</Text>
      </View>
      <View style={styles.container_buttom}>
        <TouchableOpacity onPress={onPressSim} style={styles.botao}>
          <Text style={styles.text}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNao} style={styles.botao}>
          <Text style={styles.text}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC1D",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  container_buttom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#2C2E43",
    width:90,
    padding: 10,
    borderRadius:10
  },
  text: {
    color: "#fff",
    fontSize:17,
    textAlign:"center"
  },
});

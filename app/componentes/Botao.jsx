import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";


export default function Botao(props) {
 const {name, onPress} = props;

  return (
    <TouchableOpacity onPress={()=>onPress()} style={styles.button}>
      <Icon name={name} size={25}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    width: 70,
    borderRadius: 10,
  },
});

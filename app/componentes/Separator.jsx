import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Separator(props) {
  const { dia } = props;

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text style={styles.data_do_dia}>{dia}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    width: "100%",
    marginVertical: 22,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  data_do_dia: {
    paddingLeft: 5,
    paddingRight: 5,
    position: "absolute",
    backgroundColor: "#F3F4ED",
    fontWeight: "700",
    fontSize: 20,
  },
});

import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import CartaoDeCardapio from "./CartaoDeCardapio";

function Dashboard() {
  return <ScrollView style={styles.container}>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
      <CartaoDeCardapio/>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4ED",
    flex: 1,
  },
});

export default Dashboard;

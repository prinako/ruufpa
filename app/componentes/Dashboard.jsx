import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import CartaoDeCardapio from "./CartaoDeCardapio";
import Separator from "./Separator";
function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Separator dia="Hoje" />
      <CartaoDeCardapio periodo="Almoço"/>
      <CartaoDeCardapio periodo="Jantar"/>
      <Separator dia="Amanhã" />
      <CartaoDeCardapio periodo="Almoço"/>
      <CartaoDeCardapio periodo="Jantar"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4ED",
    flex: 1,
    
  },
});

export default Dashboard;

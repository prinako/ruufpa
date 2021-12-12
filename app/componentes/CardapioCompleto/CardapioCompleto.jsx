import React from "react";
import { ScrollView, StyleSheet, StatusBar } from "react-native";

import CartaoDeCardapio from "../CartaoDeCardapio";
import Separator from "../Separator";

export default function CardapioCompleto() {
  return (
    <ScrollView style={styles.container}>
         <Separator dia="SEGUNDA-FEIRA  02/03" />
      <CartaoDeCardapio periodo="Almoço" />
      <CartaoDeCardapio periodo="Jantar" />
      <Separator dia="TERÇA-FEIRA - 03/03" />
      <CartaoDeCardapio periodo="Almoço" />
      <CartaoDeCardapio periodo="Jantar" />
      <Separator dia=" QUARTA-FEIRA  04/03" />
      <CartaoDeCardapio periodo="Almoço" />
      <CartaoDeCardapio periodo="Jantar" />
      <Separator dia="QUINTA-FEIRA  05/03" />
      <CartaoDeCardapio periodo="Almoço" />
      <CartaoDeCardapio periodo="Jantar" />
      <Separator dia="SEXTA-FEIRA  06/03" />
      <CartaoDeCardapio periodo="Almoço" />
      <CartaoDeCardapio periodo="Jantar" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

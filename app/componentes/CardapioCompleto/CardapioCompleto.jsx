import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, StatusBar, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import CartaoDeCardapio from "../CartaoDeCardapio";
import Separator from "../Separator";

export default function CardapioCompleto() {
  const [cardapios, setCardapios] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  /** acessar  o cardápio on celular */
  async function getData() {
    try {
      const data = await AsyncStorage.getItem("ru-digital");
      const d = await JSON.parse(data);
      setCardapios(d);
    } catch (e) {}
  }

  function days(data) {
    const d = new Date(data);
    const dias = [
      "SEGUNDA-FEIRA",
      "TERÇA-FEIRA",
      "QUARTA-FEIRA",
      "QUINTA-FEIRA",
      "SEXTA-FEIRA",
      "SÁBADO",
      "DOMINGO",
    ];
    const dia = dias[d.getDay()];
    return `${dia} - ${data}`;
  }

  return (
    <ScrollView style={styles.container}>
      {cardapios.map((items) => {
        return (
          <View key={items._id}>
            <Separator dia={days(items.data)} />
            <CartaoDeCardapio items={items} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

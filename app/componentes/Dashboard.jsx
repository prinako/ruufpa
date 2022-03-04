import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import data from "date-and-time";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CartaoDeCardapio from "./CartaoDeCardapio";
import Separator from "./Separator";

function Dashboard() {
  const [cardapios, setCardapios] = useState([]);
  const [date, setDate] = useState(null);
  const [dataDaAmanha, setDatDaAmanha] = useState(null);

  useEffect(() => {
    setDate(() => {
      return data.format(new Date(), "YYYY-MM-DD");
    });
    setDatDaAmanha(() => {
      const amanha = data.addDays(new Date(), 1);
      return data.format(amanha, "YYYY-MM-DD");
    });
    // console.log(new Date().getDay());
  }, []);

  /** acessar o servidor por o cardápio */
  useEffect(() => {
    const da = (async () => {
      // const store = await AsyncStorage.getItem("ru-digital");

      const respon = await fetch("https://ru-digital.herokuapp.com/api");
      let json = await respon.json();
      let m = JSON.stringify(json);
      try {
        await AsyncStorage.setItem("ru-digital", m);
      } catch (e) {
        //console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await AsyncStorage.getItem("ru-digital");
      const d = await JSON.parse(data);
      console.log();
      return setCardapios(d);
    } catch (e) {
      console.log(e);
    }
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
    //console.log(dia);
    if (dia === "DOMINGO" || dia === "SÁBADO") {
      return false;
    } else {
      return true;
    }
  }

  function Hoje(items) {
    const verifi = items.data ===date
    if(verifi && days(items.data)){
      return(
        <View key={items._id}>
        <CartaoDeCardapio items={items}/>
      </View>
      )
    }
    if (!verifi && !days(items.data)) {
      return (
        <View
          key="55"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: 40,
          }}
        >
          <Text style={{fontSize: 20,fontWeight: "600",}}>
            Hoje não tem cadapio
          </Text>
        </View>
      );
    }
  }

  function Amanha(items) {
    const verifi = items.data === dataDaAmanha
    if(verifi && days(items.data)){
    return(
      <View key={items._id}>
        <CartaoDeCardapio items={items}/>
      </View>
    )}
    if (verifi && days(items.data)) {
      return (
        <View
          key="21"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: 40,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Amanhã não tem cadapio
          </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Separator dia="Hoje" />
      {cardapios.map((items)=>{
        return(Hoje(items))
      })}
      <Separator dia="Amanhã" />
      {cardapios.map((items)=>{
        return(Amanha(items))
      })}

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

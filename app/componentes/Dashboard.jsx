import React from "react";
import { ScrollView, StyleSheet, FlatList, View } from "react-native";

import CartaoDeCardapio from "./CartaoDeCardapio";
import Separator from "./Separator";
import TipoDeComida from "./TipoDeComida";

import Data from "../Data";
console.log(Data)

function Dashboard() {
  return (
    <View>
      <FlatList data={Data} 
      renderItem={TipoDeComida}
      keyExtractor={Data.id}
      />
        
      <Separator dia="Hoje" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4ED",
    flex: 1,
  },
});

export default Dashboard;

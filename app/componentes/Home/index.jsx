import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Head from "../AppHead/Head";
import Fila from "../fila/Fila";
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Head />
      <Fila/>
       <Dashboard />
      <NavBar onPress={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: "#F3F4ED",
  },
});

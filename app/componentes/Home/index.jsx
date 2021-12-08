import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Head from "../AppHead/Head";
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Head />
       <Dashboard />
      <NavBar onMapa={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

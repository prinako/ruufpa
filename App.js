import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "./app/AppContainer";
import AppHead from "./app/componentes/AppHead";
import NavBar from "./app/componentes/NavBar";
import Map from "./app/componentes/mapa/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  const [mapa, setMapa] = useState(false);

  function controleMapa() {
    setMapa((p) => !p);
  }
  return (
    <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
      <NavigationContainer>
        <AppHead />
        <Stack.Navigator >
          <Stack.Screen
            name="ca"
            component={Dashboard}
            options={{ headerShown: false, }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <NavBar onMapa={controleMapa} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC1D",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 12,
  },
  
});

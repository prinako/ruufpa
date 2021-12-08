import React, { useState } from "react";
import { StyleSheet, StatusBar} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/Home";
import AppHead from "./app/componentes/AppHead/Head";
import Map from "./app/componentes/mapa/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  const [mapa, setMapa] = useState(false);

 
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFCC1D" />

      <Stack.Navigator style={{ backgroundColor: "red" }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC1D",
  },
});

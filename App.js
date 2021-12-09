import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from "./app/componentes/Home";
import Map from "./app/componentes/mapa/Map";
import Menu from "./app/componentes/menu/Menu";
import Historico from "./app/componentes/sobleRu/Historico";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFCC1D" />

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          style={{ backgroundColor: "#F3F4ED" }}
        />
        <Stack.Screen
          name="Mapa"
          component={Map}
          options={{
            headerStyle: {
              backgroundColor: "#FFCC1D",
            },
          }}
        /> 
        <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerStyle: {
            backgroundColor: "#FFCC1D",
          },
        }}
      />
       <Stack.Screen
        name="Histórico"
        component={Historico}
        options={{
          headerStyle: {
            backgroundColor: "#FFCC1D",
          },
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4ED",
  },
});

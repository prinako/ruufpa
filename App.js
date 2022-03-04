import React, { useEffect } from "react";
import { StyleSheet, StatusBar, AppRegistry } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** aqui que nós importamos todos os tabelas */
import Home from "./app/componentes/Home";
import Map from "./app/componentes/mapa/Map";
import Menu from "./app/componentes/menu/Menu";
import Historico from "./app/componentes/sobleRu/Historico";
import CardapioCompleto from "./app/componentes/CardapioCompleto/CardapioCompleto";
import ReclameApui from "./app/componentes/ReclameAqui/ReclameApui";
import Feedback from "./app/componentes/Feedback/Feedback";
import InfoImpotants from "./app/componentes/InfoImpotants/InfoImpotants";
import Preco from "./app/componentes/Preco/Preco";

const Stack = createNativeStackNavigator();

/* aqui que renderizar todos tabelas */
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
        <Stack.Screen
          name="Cardápio Da Semana"
          component={CardapioCompleto}
          options={{
            headerStyle: {
              backgroundColor: "#FFCC1D",
            },
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            headerStyle: {
              backgroundColor: "#FFCC1D",
            },
          }}
        />
        <Stack.Screen
          name="Reclame Aqui"
          component={ReclameApui}
          options={{
            headerStyle: {
              backgroundColor: "#FFCC1D",
            },
          }}
        />
        <Stack.Screen
          name="Informação Importantes"
          component={InfoImpotants}
          options={{
            headerStyle: {
              backgroundColor: "#FFCC1D",
            },
          }}
        />
        <Stack.Screen
          name="Preços"
          component={Preco}
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
AppRegistry.registerComponent("flatlists", () => App);

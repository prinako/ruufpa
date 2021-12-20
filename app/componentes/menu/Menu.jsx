import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Fila from "../fila/Fila";
import Slider from "../Ru_foto/Slider";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Fila />
      <Slider/>
      <ScrollView style={{paddingTop:5}}>
        <View style={styles.menu}>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => navigation.push("Cardápio Da Semana")}
            >
              <Text style={{fontSize:17}}>Cardápio Completo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => navigation.push("Histórico")}
            >
              <Text style={{fontSize:17}}>Histórico do RU</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => navigation.push("Feedback")}
            >
              <Text style={{fontSize:17}}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4ED",
    flex: 1,
  },
  menu: {
    flex: 1,
  },
  buttom: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    width: "100%",
    borderRadius: 10,
  },
});

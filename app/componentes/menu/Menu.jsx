import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import NavBar from "../NavBar";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menu}>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => navigation.push("Histórico")}
            >
              <Text>Histórico do RU</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => Alert.alert("Central do Cardápios")}
            >
              <Text>Central do Cardápio </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5, overflow: "hidden" }}>
            <TouchableOpacity
              style={styles.buttom}
              onPress={() => Alert.alert("Facebook")}
            >
              <Text>Feedback</Text>
            </TouchableOpacity>
          </View>
          <Text>menu</Text>
        </View>
      </ScrollView>
      <NavBar onPress={navigation} />
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
    height: 50,
    width: "100%",
    borderRadius: 10,
  },
});

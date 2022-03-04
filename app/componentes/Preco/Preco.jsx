import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function ProtocDeSeguranca() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ margin: 10, backgroundColor: "#fff", borderRadius: 15 }}>
        <View style={{ alignItems: "center", padding: 15 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              justifyContent: "center",
            }}
          >
            Preços
          </Text>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            height: "100%",
          }}
        >
          <Text
            style={{ textAlign: "justify", lineHeight: 20, fontSize: 16 }}
            allowFontScaling={true}
          >
            Alunos da Ufpa, de graduação e pós, e estudantes de outras
            instituições de ensino superior e básico pagam:
            <Text style={{ fontWeight: "bold" }}> R$:1,00</Text>.{"\n"}
            {"\n"}Alunos ou pessoas subsidiadas pela SAEST não pagam.
            {"\n"}
            {"\n"}Servidores, terceirizados e visitantes, que não sejam
            estudantes, pagam uma taxa de<Text style={{ fontWeight: "bold" }}> R$: 10,00</Text>.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>OBS:</Text> O JANTAR SERÁ OFERECIDO APENAS NA UNIDADE DO SETOR BÁSICO.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4ED",
    height: "100%",
  },
});

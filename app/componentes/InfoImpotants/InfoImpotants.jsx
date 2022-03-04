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
            Informações Importantes
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
            <Text style={{ fontWeight: "bold" }}>
              Informações Importantes COVID:
            </Text>
            {"\n"}
            {"\n"}
            1. Apresentação de comprovante de vacinação diria.
            {"\n"}
            {"\n"}2. Novas pias de lavagens das mãos e totens de álcool em gel
            adicionadas na entrada e saída de cada unidade.
            {"\n"}
            {"\n"}3. Acesso a bebedouros do RU só poderá ocorrer mediante de
            copos e garrafas reutilizáveis .{"\n"}
            {"\n"} 4. A compra de refeições será mantida por forma da compra de
            ticket, mas o Self- service será suspenso.
            {"\n"}
            {"\n"}
            5. Refeição volta a ser servida em formato de bandejão.
            {"\n"}
            {"\n"}
            6. As instalações do RU serão limpas constantemente e as janelas
            ficaram abertas durante o horário de funcionamento.
            {"\n"}
            {"\n"} 7. Janelas adaptadas com telas anti-insetos
            {"\n"}
            {"\n"} 9. O tempo limite recomendado para a permanência dos usuários
            do RU é de 15 a 20 minutos, afim de a rotatividade ser constante.
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>HORÁRIOS:</Text>
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Almoço:</Text> 11:00 até as
            14:00h{"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Jantar:</Text> 17:45 até as
            19:15h
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

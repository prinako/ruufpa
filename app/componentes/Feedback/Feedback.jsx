import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function Feefback({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#C8C6C6",
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 10,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <View
            style={{
              backgroundColor: "#FFCC1D",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 19.8, fontWeight: "bold" }}>
              Deixe sua Avaliação
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <TextInput
            style={styles.text_iput}
            keyboardType="email-address"
            autoComplete="email"
            placeholder="exemplo@gmail.com"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 18 }}>Seu comentário:</Text>
          <TextInput
            style={styles.comentario}
            multiline
            numberOfLines={6}
            autoCorrect={true}
            placeholder="comentário ..."
          />
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              paddingTop: 25,
            }}
          >
            <TouchableHighlight
              onPress={() =>
                Alert.alert("Feedback", "Obrigado por Sua avaliação", [
                  {
                    text: "Ok",
                    onPress: () => navigation.goBack(),
                  },
                ])
              }
              style={styles.botao}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 19,
                }}
              >
                Enviar
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  comentario: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 5,
  },
  botao: {
    backgroundColor: "#FFCC1D",
    borderRadius: 10,
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
  },
  text_iput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 45,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

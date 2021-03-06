import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function Feefback({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //Verificação
  const verifiqueTextInput = () => {
    //Verifique o Nome TextInput
    if (!nome.trim()) {
      Alert.alert("Alerta", "Por favor, digite seu nome");
      return;
    }

    if (!msg.trim()) {
      Alert.alert("Alerta", "Por favor, digite seu Comentário.");
      return;
    }

    //Verificado com sucesso
    handelOnSend();
  };

  async function handelOnSend() {
    const feedback = {
      nome: nome,
      email: email,
      msg: msg,
    };
    try {
      const resp = await fetch("https://ru-digital.herokuapp.com/feedback", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      }).then((respon) => JSON.stringify(respon));

      const p = await JSON.parse(resp);

      if (p.status === 404) {
        return Alert.alert(
          "Erro",
          "Não foi possível concluir sua avaliação, tente novamente"
        );
      }
      Alert.alert("Sucesso", "Obrigado por sua avaliação", [
        {
          text: "Ok",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (e) {}
  }
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
            onChangeText={(e) => setNome(e)}
            autoComplete="username"
            placeholder="Nome Completo"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <TextInput
            style={styles.text_iput}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            autoComplete="email"
            placeholder="exemplo@gmail.com (opcional)"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 18 }}>Seu comentário:</Text>
          <TextInput
            style={styles.comentario}
            onChangeText={(e) => setMsg(e)}
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
              onPress={() => {
                verifiqueTextInput();
              }}
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

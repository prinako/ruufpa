/** Aqui são bibiliteca do React */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from "react-native";

/** Funcão para o fumolario   */
export default function ReclameAqui({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [setor, setSetor] = useState("");
  const [msg, setMsg] = useState("");

  //Verificação
  const verifiqueTextInput = () => {
    //Verifique o Nome TextInput
    if (!nome.trim()) {
      Alert.alert("Alerta", "Por favor, digite seu nome");
      return;
    }
    //Verifique o E-mail TextInput
    if (!email.trim()) {
      Alert.alert("Alerta", "Por favor, digite seu e-mail");
      return;
    }

    if (!setor.trim()) {
      Alert.alert("Alerta", "Por favor, digite o Unidade. EX: Básico");
      return;
    }

    if (!msg.trim()) {
      Alert.alert("Alerta", "Por favor, digite seu comentário.");
      return;
    }

    //Verificado com sucesso
    handelOnSend();
  };

  async function handelOnSend() {
    const reclama = {
      nome: nome,
      email: email,
      curso: curso,
      setor: setor,
      msg: msg,
    };
    try {
      const resp = await fetch("https://ru-digital.herokuapp.com/reclamaaqui", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reclama),
      }).then((respon) => JSON.stringify(respon));

      const p = await JSON.parse(resp);
      if (p.status === 404) {
        return Alert.alert(
          "Erro",
          "Não foi possível concluir sua reclamação, tente novamente"
        );
      }
      Alert.alert("Sucesso", "Obrigado por sua reclamação", [
        {
          text: "Ok",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (e) {}
  }

  return (
    <View style={styles.container}>
      <ScrollView
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
            <Text style={{ fontSize: 19.8, fontWeight: "600" }}>
              Deixe Sua Reclamação
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
            placeholder="exemplo@gmail.com"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <TextInput
            style={styles.text_iput}
            onChangeText={(e) => setCurso(e)}
            placeholder="Seu Curso (opcional)"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <TextInput
            style={styles.text_iput}
            onChangeText={(e) => setSetor(e)}
            placeholder="Qual Unidade. EX: Básico"
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 18 }}>Seu Comentário:</Text>
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
      </ScrollView>
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

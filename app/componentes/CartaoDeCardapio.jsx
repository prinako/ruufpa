import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function CartaoDeCardapio(props) {
  const { items } = props;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>{items.amoco.refeicao}</Text>
          <Text style={styles.text_tempo}>11:00 até 14:00</Text>
        </View>
        <View style={styles.container_carda}>
          <View style={styles.text_container_2}>
            <View style={styles.titilo_do_cardapio}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                {items.amoco.nomeDaRefei}
              </Text>
            </View>
            <View style={styles.cardapio_container}>
              <Text styles={styles.text_ing}>
                {items.amoco.ingredintes.amo1}
              </Text>
              <Text styles={styles.text_ing}>
                {items.amoco.ingredintes.amo2}
              </Text>
              <Text styles={styles.text_ing}>
                {items.amoco.ingredintes.amo3}
              </Text>
              <Text styles={styles.text_ing}>
                {items.amoco.ingredintes.amo4}
              </Text>
              <Text styles={styles.text_ing}>
                {items.amoco.ingredintes.amo5}
              </Text>
            </View>
            <View style={styles.titilo_do_cardapio}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                Vegetariano:
              </Text>
              <View style={styles.cardapio_container}>
                <Text styles={styles.text_ing}>{items.amoco.vegetariano1}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>{items.jantar.refeicao}</Text>
          <Text style={styles.text_tempo}>17:45 até 19:15</Text>
        </View>
        <View style={styles.container_carda}>
          <View style={styles.text_container_2}>
            <View style={styles.titilo_do_cardapio}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                {items.jantar.nomeDaRefei}
              </Text>
            </View>
            <View style={styles.cardapio_container}>
              <Text styles={styles.text_ing}>
                {items.jantar.ingredintes.jan1}
              </Text>
              <Text styles={styles.text_ing}>
                {items.jantar.ingredintes.jan2}
              </Text>
              <Text styles={styles.text_ing}>
                {items.jantar.ingredintes.jan3}
              </Text>
              <Text styles={styles.text_ing}>
                {items.jantar.ingredintes.jan4}
              </Text>
              <Text styles={{ fontSize: 16 }}>
                {items.jantar.ingredintes.jan5}
              </Text>
            </View>
            <View style={styles.titilo_do_cardapio}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                Vegetariano:
              </Text>
              <View style={styles.cardapio_container}>
                <Text styles={styles.text_ing}>{items.jantar.vegetariano2}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  cardapio_container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    fontSize: 20,
    paddingLeft: 10,
  },
  text_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 20,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
  },
  text: {
    fontWeight: "700",
    fontSize: 25,
  },
  text_tempo: {
    fontWeight: "500",
    fontSize: 20,
  },
  text_ing: {
    fontSize: 20,
    paddingLeft: 0.5,
  },
  container_carda: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F3F4ED",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },

  text_container_2: {
    backgroundColor: "#fffc",
    paddingLeft: 15,
    flex: 1,
  },
  titilo_do_cardapio: {
    paddingTop: 5,
    marginBottom: 10,
  },
});

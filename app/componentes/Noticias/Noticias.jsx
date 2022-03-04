import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import Carousel, { Pagination } from "react-native-x2-carousel";

const { width: windowWidth } = Dimensions.get("window");
const slides = [
  {
    key: 1,
    title: "Informações Importantes COVID-19:",
    text: "Apresentação de comprovante de vacinação diria",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 2,
    title: "Informações Importantes COVID-19:",
    text: "Novas pias de lavagens das mãos e totens de álcool em gel adicionadas na entrada e saída de cada unidade.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 3,
    title: "Informações Importantes COVID-19:",
    text: "Acesso a bebedouros do RU só poderá ocorrer mediante de copos e garrafas reutilizáveis.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 4,
    title: "Informações Importantes COVID-19:",
    text: "A compra de refeições será mantida por forma da compra de ticket, mas o Self- service será suspenso.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 5,
    title: "Informações Importantes COVID-19:",
    text: "Refeição volta a ser servida em formato de bandejão",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 6,
    title: "Informações Importantes COVID-19:",
    text: "As instalações do RU serão limpas constantemente e as janelas ficaram abertas durante o horário de funcionamento.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 7,
    title: "Informações Importantes COVID-19:",
    text: "Janelas adaptadas com telas anti-insetos.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 8,
    title: "Informações Importantes COVID-19:",
    text: "O tempo limite recomendado para a permanência no RU é de 15 a 20 minutos, afim de manter a rotatividade constante do local.",
    backgroundColor: "#A2D2FF",
    color: "#000",
  },
  {
    key: 9,
    title: "PREÇOS:",
    text: "Alunos da Ufpa, de graduação e pós, e estudantes de outras instituições de ensino superior e básico pagam: R$:1,00.",
    backgroundColor: "#FBD685",
    color: "#000",
  },
  {
    key: 10,
    title: "PREÇOS:",
    text: "Alunos ou pessoas subsidiadas pela SAEST não pagam.",
    backgroundColor: "#FBD685",
    color: "#000",
  },
  {
    key: 11,
    title: "PREÇOS:",
    text: "Servidores, terceirizados e visitantes, que não sejam estudantes, pagam uma taxa de R$10,00.",
    backgroundColor: "#FBD685",
    color: "#000",
  },
  {
    key: 12,
    title: "HORÁRIOS:",
    text: "Almoço de 11:00 até as 14:00h \n \n Jantar de 17:45 até as 19:15h.",
    backgroundColor: "#586B8F",
    color: "#fff",
  },
  {
    key: 13,
    title: "HORÁRIOS:",
    text: "OBS: O Jantar será oferecido apenas na unidade do setor básico.",
    backgroundColor: "#586B8F",
    color: "#fff",
  },
];

export default function Slider() {
  const renderItem = (data) => {
    return (
      <View
        key={data.key}
        style={{
          display: "flex",
          backgroundColor: data.backgroundColor,
          width: windowWidth,
          paddingRight: 30,
          paddingLeft: 10,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            padding: 17,
          }}
        >
          <Text
            style={{ ...styles.title, color: data.color }}
            allowFontScaling={true}
          >
            {data.title}
          </Text>
        </View>
        <Text
          style={{ ...styles.text, color: data.color }}
          allowFontScaling={true}
        >
          {data.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        renderItem={renderItem}
        data={slides}
        pagination={Pagination}
        autoplay={true}
        loop={true}
        autoplayInterval={4000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    overflow: "hidden",
    borderRadius: 20,
  },
  title: {
    color: "#000",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    minHeight: 90,
    paddingBottom: 10,
  },
});

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import Carousel, { Pagination } from "react-native-x2-carousel";

const { width: windowWidth } = Dimensions.get("window");
const slides = [
  {
    key: 1,
    image: require("../../assets/ru_fotos/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    image: require("../../assets/ru_fotos/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    image: require("../../assets/ru_fotos/3.jpg"),
    backgroundColor: "#22bcb5",
  },
  {
    key: 4,
    image: require("../../assets/ru_fotos/4.jpg"),
    backgroundColor: "#22bcb5",
  },
  {
    key: 5,
    image: require("../../assets/ru_fotos/5.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default function Slider() {
  const [show, setShow] = useState(false);

  const renderItem = (data) => {
    console.log(data);
    return (
      <View key={data.image} style={styles.slide}>
        <Image style={styles.image} source={data.image} />
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
    flex: 1,
    height: 150,
  },
  slide: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    overflow: "hidden",
    width: windowWidth,
  },
  text: {
    color: "red",
  },
  title: { color: "blue" },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});

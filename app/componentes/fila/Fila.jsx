import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

export default function Fila() {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [fila, setFila] = useState(0);
  const [cul, setCul]=useState(0);

  const hoje = new Date();

  /*console.log(hoje.getHours());*/

  useEffect(()=>{
      const interval = setInterval(()=>{
          setFila((prevFila)=>(prevFila + 1)%(100+1))
      },1000)
      return()=>{
          clearInterval(interval);
      }

  },[fila])


  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setCul(-width + (width * fila) / 100);
  }, [width,fila]);

  useEffect(() => {
    reactive.setValue(cul);
  }, [cul]);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingBottom: 5 }}>
        <Text>FILA</Text>
      </View>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;

          setWidth(newWidth);
        }}
        style={styles.progress}
      >
        <Animated.View
          style={{
            height: 20,
            width: "100%",
            borderRadius: 20,
            backgroundColor: "#3E7C17",
            position: "absolute",
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        ></Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 5,
  },
  progress: {
    backgroundColor: "#C7BEA2",
    height: 20,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
});

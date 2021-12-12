import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { View, StyleSheet, Dimensions, Text, Alert } from "react-native";

import GOOGLE_API_KEY from "../../config/Api";

export default function Map({ navigation }) {
  const mapEL = useRef(null);

  const [localizacao, setLocalizacao] = useState(null);
  const [erroMsg, setErrorMsg] = useState(null);
  const [distancia, setDistancia] = useState(null);

  const destino = {
    latitude: -1.47779,
    longitude: -48.45812,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };

  useEffect(() => {
    (async () => {
      let { status: foreggroundStatus } =
        await Location.requestForegroundPermissionsAsync();

      if (foreggroundStatus === "granted") {
        let location = await Location.getCurrentPositionAsync();
        setLocalizacao({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });
        /**
        let { status: backgrundStatus } =
          await Location.requestBackgroundPermissionsAsync();
        if (backgrundStatus === "granted") {
        }*/
      } else {
        setErrorMsg(
          "A permissão para acessar o localização foi negada. Para usa o mapa precisa de permissão de sua localização.\n \nQuer permite?"
        );
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {localizacao ? (
        <MapView
          style={styles.map}
          initialRegion={localizacao}
          userLocationUpdateInterval={1}
          userLocationFastestInterval={1}
          showsUserLocation={true}
          toolbarEnabled={true}
          followsUserLocation={true}
          showsCompass={true}
          showsBuildings={true}
          userLocationPriority="balanced"
          showsMyLocationButton={true}
          zoomEnabled={true}
          loadingEnabled={true}
          provider={PROVIDER_GOOGLE}
          ref={mapEL}
        >
          <Marker coordinate={destino} title="Ru UFPA" icon={require("../../assets/ru_logo.png")}/>
          <MapViewDirections
            origin={localizacao}
            destination={destino}
            apikey={GOOGLE_API_KEY.API}
            lineDashPattern={[0]}
            timePrecision="now"
            mode="WALKING"
            strokeWidth={3}
            language={"pt-br"}
            onReady={(resultado) => {
              setDistancia(resultado.distance);
              /*console.log(resultado.duration)*/
              mapEL.current.fitToCoordinates(resultado.coordinates, {
                edgePadding: {
                  top: 50,
                  bottom: 50,
                  left: 50,
                  right: 50,
                },
              });
            }}
          />
        </MapView>
      ) : (
        erroMsg &&
        Alert.alert("Permissão", erroMsg, [
          {
            text: "Não",
            onPress: () => navigation.push("Home"),
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => navigation.push("Mapa"),
            style: "default",
          },
        ])
      )}
      {distancia && (
        <View style={styles.distan}>
          <Text>Distância: {distancia} km</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  distan: {
    zIndex: 10,
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
  },
});

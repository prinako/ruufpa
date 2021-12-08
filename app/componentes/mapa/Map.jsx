import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import GOOGLE_API_KEY from "../../config";

export default function Map() {
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
        setErrorMsg("A permissão para acessar o local foi negada");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={localizacao}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        ref={mapEL}
      >
        {localizacao && (
          <MapViewDirections
            origin={localizacao}
            destination={destino}
            apikey={GOOGLE_API_KEY.API}
            lineDashPattern={[0]}
            resetOnChange={true}
            strokeWidth={5}
            optimizeWaypoints={true}
            language={"pt-br"}
            onReady={(resultado) => {
              setDistancia(resultado.distance);
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
        )}
      </MapView>
      {distancia && (
        <View style={styles.distan}>
          <Text>Distância: {distancia}m</Text>
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
    width: Dimensions.get("window").width,
    height: "100%",
  },
  distan: {
    zIndex: 10,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
  },
});

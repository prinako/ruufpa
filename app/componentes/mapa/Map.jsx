import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { View, StyleSheet, Dimensions } from "react-native";

import GOOGLE_API_KEY from "../../config";

export default function Map() {
  const mapEL = useRef(null);

  const [localizacao, setLocalizacao] = useState(null);


  const [destino, setDestino] = useState({
    latitude: -1.47779,
    longitude: -48.45812,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  });
  const [erroMsg, setErrorMsg] = useState(null);

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
            region={JSON.stringify(localizacao)}
            destination={destino}
            apikey={GOOGLE_API_KEY.API2}
            strokeWidth={3}
            language={"pt-br"}
            onReady={(resultado) => {
              mapEL.current.fitToCoordinates(
                resultado.cooedinates,{
                  edgePadding:{
                    top:50,
                    bottom:50,
                    left:50,
                    right:50,
                  }
                }
              )
              console.log("dis" + " " + resultado);
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});

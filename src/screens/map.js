import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiaG92bmFuIiwiYSI6ImNrdnd0MnpibDAxa2Uyb21sd2VncWF2cTQifQ.Korr0GR9INCQixny9mD-0A');

const coordinates = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [44.497116, 40.152027]
    },
    "properties": {
        "name": "im kety"
    }
}]
const Map = () => {

    const coordinates = [
        [44.497216, 40.152027],
        [44.498316, 40.152027],
        [44.497116, 40.153027],
        [44.497116, 40.154027],
    ]



    return (
        <View style={styles.container}>
            <MapboxGL.MapView
                style={styles.map}
                logoEnabled={false}
                localizeLabels={true}>
                <MapboxGL.Camera
                    zoomLevel={15}
                    animationMode={'flyTo'}
                    animationDuration={1100}
                    centerCoordinate={[44.497116, 40.152027]}
                />


                {
                    coordinates.map((coordinate) => {
                        return (
                            <MapboxGL.MarkerView
                                id={`${coordinate[0]}${coordinate[1]}`}
                                coordinate={coordinate}>
                                <View>
                                    <View style={styles.round}></View>
                                </View>
                            </MapboxGL.MarkerView>
                        )
                    })
                }

            </MapboxGL.MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#0002ff",
        padding: 10,
        margin: 12,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#cfcfcf',
    },
    map: {
        flex: 1
    },
    icon: {
        backgroundColor: 'red',

        color: 'red'
    },
    round: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10
    }
});


export default Map;


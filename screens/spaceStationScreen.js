import React from "react";
import { View, Text, StyleSheet} from "react-native";
import axios from 'axios'
import MapView, {Marker} from "react-native-maps";

export default class SpaceStationScreen extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            location: {}
        }
    }

    getIssLocation = () => {
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => {this.setState({location: response.data})})
        .catch(error => {console.log(error)})
    }

    componentDidMount()
    {
        this.getIssLocation();
    }

    render()
    {
        console.log(this.state.location)
        if(Object.keys(this.state.location).length === 0)
        {
            return(
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        else
        {
            return(
                <View style = {styles.container}>
                    <MapView 
                        style = {styles.map}  
                        region={{
                            latitude: this.state.location.latitude,
                            longitude: this.state.location.longitude,
                            latitudeDelta: 100,
                            longitudeDelta: 100
                        }}
                    />

                    <Text>Latitude: {this.state.location.latitude}</Text>
                    <Text>Longitude: {this.state.location.longitude}</Text>
                    <Text>Altitude (KM): {this.state.location.altitude}</Text>
                    <Text>Velocity (KM/H): {this.state.location.velocity}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
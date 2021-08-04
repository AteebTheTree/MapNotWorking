import { steelblue } from "color-name";
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image} from "react-native";
import Header from '../components/header'

export default function HomeSceen({navigation})
{
    return(
        <View style = {{flex: 1}}>
            <ImageBackground source = {require("../assets/bg_image.png")} style = {{flex: 1}}>
                <Header/>

                <View style = {styles.container}>
                    <Text style = {styles.bigGreyText}>1</Text>
                    <Text style = {styles.bigBlackText}>Space Station</Text>
                    <Image source = {require('../assets/iss_icon.png')} style = {styles.iconStyle}/>
                    <TouchableOpacity onPress = {() => navigation.navigate("SpaceStationScreen")}>
                        <Text style = {styles.smallRedButton}>Know More</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.container}>
                    <Text style = {styles.bigGreyText}>2</Text>
                    <Text style = {styles.bigBlackText}>Meteors</Text>
                    <Image source = {require('../assets/meteor_icon.png')} style = {styles.iconStyle}/>
                    <TouchableOpacity onPress = {() => navigation.navigate("MeteorScreen")}>
                        <Text style = {styles.smallRedButton}>Know More</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 600, 
        height: 150, 
        backgroundColor: "white", 
        borderRadius: 20, 
        alignSelf: "center",
        marginTop: 100,
    },
    bigGreyText: {
        color: "rgba(171, 183, 183, 0.95)",
        position: "absolute",
        fontWeight: 'bold',
        right: 15,
        fontSize: 200,
        bottom: 10
    },
    bigBlackText:{
        color: "black",
        alignSelf: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: 50,
    },
    smallRedButton: {
        fontSize: 20,
        position: 'absolute',
        bottom: -130,
        left: 15,
        color: "#ff726f"       
    },
    iconStyle: {
        width: 200,
        height: 150,
        left: -90,
        top: -60,
        position: 'absolute'
    }
})
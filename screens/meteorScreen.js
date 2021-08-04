import React from "react";
import { View, StyleSheet, Image, Text} from "react-native";

export default class MeteorScreen extends React.Component
{
    render()
    {
        return(
            <View style = {styles.mainView}>
                <Text>MeteorScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center"
    },
    spaceImg: {
        flex: 1,
        resizeMode: "cover"
    }
})
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Platform } from 'react-native'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const UploadScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Upload Article")} activeOpacity={0.6}>
            <View style={styles.Button}>
                <Text style={styles.buttonText}> Article</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Upload Video")} activeOpacity={0.6}>
                <View style={styles.Button}>
                    <Text style={styles.buttonText}>Video</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Upload Blurb")} activeOpacity={0.6}>
                <View style={styles.Button} >
                    <Text style={styles.buttonText}>Blurb</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191720",
        alignItems: "center",
        justifyContent: "center"
    },
    Button: {
        backgroundColor: "lightgrey",
        marginBottom: 30,
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"

    }

})

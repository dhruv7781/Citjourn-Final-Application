import React from 'react'
import { Platform } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const ArticleScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>A great Cricketer</Text>
            <Text style={styles.subheading}>What is Lorem Ipsum?</Text>
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
    )
}

export default ArticleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191720',
    },
    heading: {
        color: "white", 
        fontWeight: "900", 
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto", 
        alignSelf: "center",
        marginBottom: 25,
        fontSize: 24,
        marginTop: 20,
        textTransform: "uppercase"



    },
    text: {
        color: "white", 
        marginHorizontal: 12,
        fontWeight: "400",
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto", 
        alignSelf: "center",
        marginBottom: 15,
        fontSize: 18,
        marginTop: 10,
        
    },
    subheading: {
        color: "white",
        fontWeight: "700",
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
        alignSelf: "center",
        fontSize: 18,
    }
})

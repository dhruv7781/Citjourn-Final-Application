import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const UploadArticleScreen = () => {
    const [article, setArticle] = useState("")
    const [heading, setHeading] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline={true} numberOfLines={2} style={styles.header} placeholderTextColor="#6E6F79" placeholder="Heading" value={heading} onChangeText={text => setHeading(text)} />

            </View>
           
           
            <View style={styles.inputContainer}>
                <TextInput autoFocus={true} multiline={true} style={styles.input} placeholderTextColor="#6E6F79" placeholder="Write an article..."  value={article} onChangeText={text => setArticle(text)} />
            </View>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.Button}>
                <Text style={styles.buttonText}>Upload Article</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.Button}>
                    <Text style={styles.buttonText}>Upload Image</Text>
                </View>
            </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    )
}

export default UploadArticleScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#191720",
        flex: 1,
       

    },
   
    inputContainer: {
        backgroundColor: "#1E1C24",
        borderRadius: 15,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#6E6F79",

     
       
        
    },
    input: {
        height: Platform.OS === "ios" ? 250 : 440,  
        marginLeft: 20,
        marginRight: 20,
        marginTop: Platform.OS === "ios" ? 5 : -200,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
       
        
    },
    Button: {
        backgroundColor: "lightgrey",
        marginBottom: 30,
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 25,
        marginTop: 70

    },
    buttonText: {
        color: "black", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"

        

    },
    header: {
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginTop: Platform.OS === "ios" ? 5 : -200,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }

})

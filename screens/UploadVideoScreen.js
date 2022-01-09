import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const UploadVideoScreen = () => {
    const [caption, setCaption] = useState("")
    
    return (
        <View style={styles.container}>
             
            <View style={styles.inputContainer}>
                <TextInput autoFocus={true} multiline={true} style={styles.input} placeholderTextColor="#6E6F79" placeholder="Write the Caption..." value={caption} onChangeText={text => setCaption(text)} />
            </View>
            
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.Button}>
                        <Text style={styles.buttonText}>Upload Video</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.Button}>
                        <Text style={styles.buttonText}>Capture Video</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UploadVideoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191720",
    },
    Button: {
        backgroundColor: "lightgrey",
        marginBottom: 30,
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginTop: 70

    },
    buttonText: {
        color: "black", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"

        

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
        height: Platform.OS === "ios" ? 140 : 440,  
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
})


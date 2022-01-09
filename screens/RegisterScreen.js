import React, { useState } from 'react'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={{top: 180}}>
                <Text style={{color: "white", bottom: 300, fontSize: 40, fontWeight: "bold", marginHorizontal: 15}}>Welcome To The World of CITJOURN</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#6E6F79" value={name} onChangeText={text => setName(text)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" type="email" placeholderTextColor="#6E6F79" value={email} onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Username" type="Username" placeholderTextColor="#6E6F79" value={username} onChangeText={text => setUsername(text)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Password" type="Password" secureTextEntry placeholderTextColor="#6E6F79" value={password} onChangeText={text => setPassword(text)} />
            </View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Confirm Password" type="Password" secureTextEntry placeholderTextColor="#6E6F79" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
            </View>
           
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: "100%",
        bottom: 100,
        top: 0,
        backgroundColor: "#191720",

       
    },

    inputContainer: {
        backgroundColor: "#1E1C24",
        borderRadius: 15,
        marginTop: 0,
        height: 45,
        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#6E6F79",
        width: "100%",
        bottom: 70,

       
        
    },

    input: {
      height: 50,  
      flex: 1,
      padding: 10,
      marginLeft: 20,
      
    },
})

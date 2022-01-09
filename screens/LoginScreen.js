import React, {useState} from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Keyboard } from 'react-native'
import { Platform } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, View, Text} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'



const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={{marginBottom: 50, color: "#FBFBFB", fontSize: 36, fontWeight: "bold", fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"}}>Lets Sign You in.</Text>
            <Text style={{color: "#E9E9EA", fontSize: 30, fontWeight: "bold", marginBottom: 30, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"}}>Welcome back.</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#6E6F79" value={username} onChangeText={(text) => setUsername(text)}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#6E6F79" secureTextEntry value={password} type="Password" onChangeText={text => setPassword(text)}/>
            </View>
            <View>
                <Text style={{color: "#686974", fontSize: 16, fontWeight: "bold", fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"}}>Don't have an account? <TouchableOpacity onPress={() => navigation.navigate("Register")} activeOpacity={0.6}><Text style={{color: "#EFEFEF", fontSize: 16, fontWeight: "bold", top: Platform.OS ==="android" ? 1 : 7, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"}}>Register</Text></TouchableOpacity></Text>
            </View>
            <TouchableOpacity style={{backgroundColor: "#FFFFFF", borderRadius: 10, width: 300, marginTop: 400}}>
                <Button buttonStyle={styles.buttonStyle} containerStyle={styles.button} title="Sign In" type="outline" onPress={() => navigation.navigate("Home")}/>
            </TouchableOpacity>
            
           
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: "100%",
        backgroundColor: "#191720",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
       
    },

    inputContainer: {
        backgroundColor: "#1E1C24",
        borderRadius: 15,
       
        height: 45,
        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#6E6F79",
        width: "100%"
       
        
    },

    input: {
      height: 50,  
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: "white"
      
    },

    button: {
        fontWeight: "bold",
        color: "black"
    },

    buttonStyle: {
        fontWeight: "bold"
    }
    
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import Constant from "expo-constants"
import { TouchableOpacity } from 'react-native'
import SearchBar from '../screens/SearchScreen'

import SearchScreen from '../screens/SearchScreen'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native'

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{flexDirection: "row", margin: 5}}>
              <Ionicons  name="md-search" size={30} color="white" style={{marginLeft: 0, }}/>
            </TouchableOpacity>
            <View>
                <Text style={{fontWeight: "bold", fontFamily: "Avenir",  color: "white", fontSize: 22, marginLeft: 5}}>CitJOURN</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{flexDirection: "row",}}>
                <Ionicons name="person" size={30} color="white" style={{marginLeft: 20}}/>


            </TouchableOpacity>
            <StatusBar type="light" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 35, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
        backgroundColor: "#191720",
        
        
    }
})

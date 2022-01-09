import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>I am the Profile Screen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191720",
    }
})

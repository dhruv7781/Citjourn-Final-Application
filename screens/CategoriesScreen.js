import React from 'react'
import { SafeAreaView } from 'react-native'
import { Platform } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'


const CATEGORIES = [
    {
        id: 1,
        title: 'National',
        color: 'red'
    },
    {
        id: 2,
        title: 'International',
        color: 'blue'
    },
    {
        id: 3,
        title: 'Sports',
        color: 'green'
    },
    {
        id: 4,
        title: 'Business',
        color: "black"
    },
    {
        id: 5,
        title: 'Technology',
        color: 'purple'
    },
    {
        id: 6,
        title: 'Finance',
        color: 'orange'
    },
    {
        id: 7,
        title: 'College/School',
        color: 'brown'
    },
    {
        id: 8,
        title: 'Fashion',
        color: 'pink'
    },
    {
        id: 9,
        title: 'Entertainment',
        color: 'grey'
    },
    {
        id: 10,
        title: 'Crypto',
        color: 'skyblue'
    }
   
]




const CategoriesScreen = (props) => {
    const renderGridItem = ({item}) => {
        return (
           
           
            <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")} style={{ ...styles.gridItem, ...{backgroundColor: item.color}}}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
           
           
        )
    }
    return (
        <View>
            <FlatList style={styles.container} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        </View>
    )

}

export default CategoriesScreen

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        top: Platform.OS === 'android' ? 30 : 40,
        marginBottom: 30
        
    
        
    
    },
    container: {
       
        backgroundColor: "#191720",
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"

    }

})

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({item}) => {
    return (
         
        <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
})

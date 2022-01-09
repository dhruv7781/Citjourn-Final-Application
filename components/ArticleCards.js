import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import { Platform } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'


const ArticleCards = (props) => {
    const { article } = props
    
    return (
        <View style={styles.container}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 24, alignSelf: "center", marginBottom: 15, fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"}}>{article.title}</Text>
          <TouchableOpacity> 
              <Text style={{color: "white", fontSize: 16, marginLeft: 200}}>By {article.name}</Text>
              </TouchableOpacity> 
        </View>
    )
}

export default ArticleCards

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "#191720",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#222222"
      
    }
})

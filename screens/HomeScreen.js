import React, { useState } from 'react'
import { Image, RefreshControl, TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View} from 'react-native'
import VideoCards from '../components/VideoCards'
import Header from '../components/Header'
import SearchScreen from './SearchScreen'
import ArticleCards from '../components/ArticleCards'
import Videos from '../components/Videos.json'
import Articles from '../components/Articles.json'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


const HomeScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
    return (
        <View style={styles.container}>
            
                <Header />
                <View>
                    <Text style={{color: "white"}}></Text>
                </View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View>
                    <VideoCards video={Videos[0]} />
                </View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Video")}>
                    <VideoCards video={Videos[1]} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Article")}>
                    <ArticleCards article={Articles[0]} />
                </TouchableOpacity>
                    <ArticleCards article={Articles[1]}/>
               
            </ScrollView>
           
           
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191720",
        fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"
        
        
      
        
        
    }
})

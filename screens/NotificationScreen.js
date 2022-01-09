import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Platform } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Header from '../components/Header'


const data = [
    {
        id: "1",
        post_title: "CAN INDIA BECOME A SUPERPOWER LIKE THE UNITED STATES OF MAERICA?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png", 
        username: "DHRUV KAPOOR",
        notification: "Liked your post",
        time: "10:00 AM"
    },
    {
        id: "2",
        post_title: "IS VIRAT KOHLI THE BEST CRICKETER IN THE WORLD",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png", 
        username: "ARIAN CHAUHAN",
        notification: "Commented on your post",
        time: "2:00 PM"
    },
    {
        id: "3",
        post_title: "IS MAHENDRA SINGH DHONI THE GREATEST FINISHER AND CAPTAIN OF ALL TIME?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png", 
        username: "ELON MUSK",
        notification: "Commented on your post",
        time: "10:00 AM"
    },
    {
        id: "4",
        post_title: "Harshad Mehta - The Hero or the Villain?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        username: "JEFF BEZOS JR.",
        notification: "Liked your post",
        time: "12:00 AM"
    },
    {
        id: "5",
        post_title: "Harshad Mehta - The Hero or the Villain?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        username: "JEFF BEZOS JR.",
        notification: "Liked your post",
        time: "12:00 AM"
    },
    {
        id: "6",
        post_title: "Harshad Mehta - The Hero or the Villain?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        username: "JEFF BEZOS JR.",
        notification: "Liked your post",
        time: "12:00 AM"
    },
    {
        id: "7",
        post_title: "Harshad Mehta - The Hero or the Villain?",
        post_image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        username: "JEFF BEZOS JR.",
        notification: "Liked your post",
        time: "12:00 AM"
    },
        
    
]
    


const NotificationScreen = (props) => {
    const renderGridItem = ({item}) => {
        return (
           
            <View>
            <TouchableOpacity activeOpacity={0.6} style={{flexDirection: "row", marginBottom: 40, marginTop: 10}}>
                <Image style={{width: 40, height: 40, borderRadius: 20, left: 10, top: 18}} rounded source={{uri: item.post_image}}/>
                <View style={{flexDirection: "column"}}>
                <Text style={{color: "white", fontWeight: "900", marginTop: 10, marginHorizontal: 80,}}>{item.username} {item.notification}</Text>
                <Text style={{color: "white", fontWeight: "600", marginHorizontal: 80, marginTop: 30, }}>{item.post_title}</Text>
               
                </View>
               
               
            </TouchableOpacity>
            <Divider width={2}/>
            </View>
            
            
           
        )
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color: "white", fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto", fontSize: 24, fontWeight: "bold"}}>Notifications</Text>
            </View>
            <FlatList data={data} renderItem={renderGridItem}/>            

        
        </View>
        
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#191720",
        flex: 1
    },
    header: {
        height: 75,
        marginTop: 35, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
        backgroundColor: "#191720"
    }
})

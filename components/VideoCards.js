import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';


const VideoCards = (props) => {
  const { video } = props
   
const videos = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
   
    <View style={styles.container}>
    <Text style={{color: "white", fontWeight: "bold", fontSize: 24, alignSelf: "center", marginBottom: 15, fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"}}>{video.title}</Text>
      <Video
        ref={videos}
        style={styles.video}
        source={{
          uri: video.video,
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        
      />
      
      <TouchableOpacity style={styles.buttons}>
       <Text style={{color: "white", fontSize: 16, marginLeft: 200, fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto"}}>By Elon Musk</Text>
      </TouchableOpacity>
    </View>
  
  );
}

export default VideoCards

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
      
        



    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
})

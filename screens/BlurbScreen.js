import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import { Dimensions } from 'react-native';
import  videoData  from '../components/Database';

const { width, height } = Dimensions.get('window');

const videos = [
  {
    id: '1',
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    type: 'mp4',
    poster: 'https://i.imgur.com/p2tWzlk.png',
  },
  {
    id: '2',
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    type: 'mp4',
    poster: 'https://i.imgur.com/p2tWzlk.png',
  }
]
export default function BlurbScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
     <Video 
     ref={videoData}
     style={styles.video}
     source={videos[0]}
     useNativeControls={true}
     resizeMode="stretch"
     onPlaybackStatusUpdate={(status) => setStatus(status)}
     orientation="landscape"
     isLooping
       />
      <StatusBar type="light" />
    </View>

  ) }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191720",
    },
    video: {
       width: width,
       height: height,

    },
    
}); 
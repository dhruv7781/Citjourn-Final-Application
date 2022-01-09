import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import 'react-native-gesture-handler';
import  { NavigationContainer }  from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator }   from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import CategoriesScreen from './screens/CategoriesScreen';
import NotificationScreen from './screens/NotificationScreen';
import BlurbScreen from './screens/BlurbScreen';
import SearchScreen from './screens/SearchScreen';
import UploadScreen from './screens/UploadScreen';
import UploadArticleScreen from './screens/UploadArticleScreen';
import UploadVideoScreen from './screens/UploadVideoScreen';
import UploadBlurbScreen from './screens/UploadBlurbScreen';
import ProfileScreen from './screens/ProfileScreen';
import VideoScreen from './screens/VideoScreen';
import ArticleScreen from './screens/ArticleScreen';



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
    screenOptions={({route}) => ({
     tabBarIcon: ({focused, color, size}) => {
       let iconName;

       if (route.name === "Home") {
         iconName = focused ? "home" : "home-outline";
       } else if (route.name === "Categories") {
         iconName = focused ? "apps" : "apps-outline"
       } else if (route.name === "Blurb") {
         iconName = focused ? "play-circle" : "play-circle-outline"
       } else if (route.name === "Notifications") {
         iconName = focused ? "notifications" : "notifications-outline"
       } else if (route.name === "Upload") {
          iconName = focused ? "add-circle" : "add-circle-outline"
       }
       return <Ionicons name={iconName} size={size} color={color} />;
     },
     tabBarActiveTintColor: 'white',
     tabBarInactiveTintColor: 'gray',
     tabBarStyle: {
       backgroundColor: "#191720"
     }, headerShown: false

   })}>
     <Tabs.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
     <Tabs.Screen name="Categories" component={CategoriesScreen} />
     <Tabs.Screen name="Upload"  optiond={{}} component={UploadScreen} />
     <Tabs.Screen name="Blurb" component={BlurbScreen} />
     <Tabs.Screen name="Notifications" component={NotificationScreen} />
     
     
   </Tabs.Navigator>
  );
}

export default function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#191720'}, headerTitleStyle: {color: "white", fontWeight: "bold"}}}>
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={TabsNavigator} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
          <Stack.Screen name="Upload Article" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={UploadArticleScreen} />
          <Stack.Screen name="Upload Video" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={UploadVideoScreen} />
          <Stack.Screen name="Upload Blurb" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={UploadBlurbScreen} />
          <Stack.Screen name="Profile" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={ProfileScreen} />
          <Stack.Screen name="Video" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={VideoScreen} />
          <Stack.Screen name="Article" options={{headerTintColor: "white", headerBackTitleVisible: false}} component={ArticleScreen} />
        </Stack.Navigator>
        <StatusBar type="light" />
      </NavigationContainer>

     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191720',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

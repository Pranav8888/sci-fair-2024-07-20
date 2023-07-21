import { SafeAreaView, TouchableOpacity, View, Text, Image } from "react-native";
import { Stack, useRouter } from 'expo-router'
import { icons, images } from '../constants'
import { ScreenHeaderBtn } from '../components'
import React from 'react';


const Home = () => {
  const iconPath = "ProfileScreenOwner"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: '#e8e6e6'},
          headerTitleStyle: {color: '#444'},
          headerShadowVisible: false,
          headerLeft: () => (           
            <ScreenHeaderBtn iconPath={null} iconUrl={icons.menu} dimension={40}/>),
          headerRight: () => (
            <ScreenHeaderBtn iconPath={iconPath} iconUrl={images.profile} dimension={40} /> ),
          headerTitle: 'JOBS',
        }}
      />
    </SafeAreaView>
  )
} 



export default Home;
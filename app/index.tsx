import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native' // Moved Image from 'react-native'
import { ResizeMode, Video } from 'expo-av'
import React, { useState } from 'react'
import { useAssets } from 'expo-asset'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const { width, height } = Dimensions.get('window')

const Page = () => {
  const [assets] = useAssets([require('../assets/videos/intro1.mp4')])
  const [videoError, setVideoError] = useState(false)

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/image2.jpg')} style={styles.image} /> {/* Added style for Image */}
      {/* {assets && !videoError && (
          <Video
            useNativeControls
            onError={(error) => {
              console.error('Video error:', error)
              setVideoError(true)
            }}
            isMuted
            isLooping
            resizeMode={ResizeMode.COVER}
            shouldPlay
            source={{ uri: assets[0].uri }}
            style={styles.video}
          />
        )} */}
      <View style={styles.overlay}>
        <View style={{ marginTop: 80, padding: 20 }}>
          <Text style={styles.header}>Ready to change the way you make money?</Text>
        </View>
        <View style={styles.buttons}>
          <Link href={'/login'} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]} asChild>
            <TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 22, fontWeight: '500' }}>Log in</Text>
            </TouchableOpacity>
          </Link>
          <Link href={'/signup'} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]} asChild>
            <TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { // Added style for the Image
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  video: {
    width: width,
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
})

export default Page

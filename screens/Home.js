import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
     headerShown:false
    })
  }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">Home haa i got it</Text>
    </SafeAreaView>
  )
}

export default Home
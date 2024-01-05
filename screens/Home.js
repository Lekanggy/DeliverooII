import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MagnifyingGlassIcon, ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeatureRow from '../components/FeatureRow'

const Home = () => {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
     headerShown:false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{uri: "https://links.papareact.com/wru"}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>
        {/* Search bar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 p-3 bg-gray-200">
              <MagnifyingGlassIcon size={20} color="#00CCBB"/>
              <TextInput 
                placeholder='Resturant and Cusine'
                keyboardType='default'
              />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* Body */}
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100
          }}
        >
          {/* Categories */}
          <Categories/>
          {/* Features Rows */}

          <FeatureRow
            id="123"
            title="Feature"
            description="This feature is rare one so enjoy it"
          />
           <FeatureRow
            id="123"
            title="Tasty Discount"
            description="This feature is rare one so enjoy it"
          />
           <FeatureRow
            id="123"
            title="Offers Near you"
            description="This feature is rare one so enjoy it"
          />
        </ScrollView>
       
    </SafeAreaView>
  )
}

export default Home
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectRestaurantItems } from '../features/restaurantSlice';

const DeliveryScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurantItems)
    console.log("res", restaurant?.lon)
    console.log("res", restaurant?.lat)
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50">
            <View className="flex-row items-center justify-between p-5">
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <XMarkIcon size={30} color="white"/>
                </TouchableOpacity>
                <Text className="text-white font-light text-lg">Order Help</Text>
            </View>

            <View className="bg-white my-2 mx-5 rounded-md p-6 z-50 shadow-md">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="font-bold text-4xl">45-54 mins</Text>
                    </View>
                    <Image 
                        source={{uri: "https://links.papareact.com/fls"}}
                        className="h-20 w-20"
                    />
                </View>
                <Progress.Bar size={30} indeterminate={true} color="#00CCBB"/>
            </View>
      </SafeAreaView>

        <MapView
            initialRegion={{
                latitude: restaurant?.lat,
                longitude: restaurant?.lon,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            className="flex-1 -mt-10 z-0 h-full"
            mapType='mutedStandard'
            //style={{ alignSelf: 'stretch', height: '100%' }}
        >
            <Marker
                coordinate={{
                    latitude: restaurant?.lat,
                    longitude: restaurant?.lon,
                }}
                title={restaurant?.title}
                description={restaurant?.short_description}
                pinColor="#00CCBB"
                identifier='origin'
            />

        </MapView>
        <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
            <Image 
                source={{uri: "https://links.papareact.com/wru"}}
                className="h-12 w-12 bg-gray-300 rounded-full ml-5"
            />
            <View className="flex-1">
                <Text className="text-lg">Sonny Carrly</Text>
                <Text className="text-gray-400">Your Rider</Text>
            </View>
            <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
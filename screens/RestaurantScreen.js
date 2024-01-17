import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const {params:{
        id,
        imgUrl,
        title, 
        rating, 
        genre, 
        address, 
        short_description, 
        dishes, 
        lon, 
        lat
    }} = useRoute();

    useEffect(()=>{
        dispatch(setRestaurant({
            id,
            imgUrl,
            title, 
            rating, 
            genre, 
            address, 
            short_description, 
            dishes, 
            lon, 
            lat
        }))
    }, [])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <>
         <BasketIcon/>
         <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.goBack()
                    }}
                    className="absolute p-2 bg-gray-100 rounded-full left-5 top-14"
                >
                    <ArrowLeftIcon size={20} color="#00CCBB"/>
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon size={22} opacity={0.5} color="green"/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon size={22} opacity={0.4} color="green"/>
                            <Text className="text-xs text-gray-500">
                                Nearby . {address}
                            </Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>

                <TouchableOpacity 
                    className="flex-row items-center space-x-2 p-4 
                    border-y border-gray-300"
                >
                    <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6}/>
                    <Text className="pl-1 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="#00CCBB"/>
                </TouchableOpacity>
            </View>
            <View className="pb-36">
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                {
                    dishes?.map(d=>
                            <DishRow
                                key={d?._id}
                                id={d?._id}
                                name={d?.name}
                                price={d?.price}
                                description={d?.short_description}
                                image={d?.image}
                            />
                        )
                }
            </View>
        </ScrollView>
    </>
    
   
  )
}

export default RestaurantScreen
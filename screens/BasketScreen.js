import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurantItems } from '../features/restaurantSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const restaurant = useSelector(selectRestaurantItems)
    const totalBasket = useSelector(selectBasketTotal)
    const [groupedItemInBasket, setGroupedItemInBasket] = useState({})
    const dispatch = useDispatch()

    useMemo(()=>{
        const groupedItems = items?.reduce((result, item)=>{
            (result[item.id] = result[item.id] || []).push(item)
            return result;
        }, {})

        setGroupedItemInBasket(groupedItems)
    },[items])

    // console.log(Object.entries(groupedItemInBasket)[0])
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">
                        {restaurant?.title}
                    </Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-3">
                    <XCircleIcon color="#00CCBB" height={50} width={50}/>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full p-4"
                />
                <Text className="flex-1">Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {
                    Object.entries(groupedItemInBasket).map(([key, objItem])=>(
                        <View 
                            key={key} 
                            className="flex-row items-center space-x-3 bg-white py-2 px-5"
                        >
                            <Text className="text-[#00CCBB]">{objItem.length} x</Text>
                            <Image 
                                source={{
                                    uri: urlFor(objItem[0]?.image).url()
                                }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{objItem[0]?.name}</Text>
                            <Text className="text-gray-600">
                                <Currency quantity={objItem[0]?.price} currency='GBP'/>
                            </Text>
                            <TouchableOpacity>
                                <Text 
                                    className="text-xs text-[#00CCBB]" 
                                    onPress={()=>dispatch(removeFromBasket({id: key}))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Sub Total</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={totalBasket} currency='GBP'/>
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery fees</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={5.99} currency='GBP'/>
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text>Total Order</Text>
                    <Text className="font-extrabold">
                        <Currency quantity={totalBasket + 5.99} currency='GBP'/>
                    </Text>
                </View>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate("PreparingOrderScreen")} 
                    className="rounded-lg bg-[#00CCBB] p-4"
                >
                    <Text className="text-center text-white font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
   
  )
}

export default BasketScreen
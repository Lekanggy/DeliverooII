import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
    const totalBasket = useSelector(selectBasketTotal)
    console.log("toal", totalBasket)
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity 
        onPress={()=>navigation.navigate("Basket")} 
        className="mx-5 p-4 bg-[#00CCBB] rounded-lg flex-row items-center space-x-1"
      >
            <Text className="text-white font-extrabold py-1 px-2 bg-[#01A296]">
                {items.length}
            </Text>
            <Text className="text-white font-extrabold text-lg text-center flex-1">
                View Basket
            </Text>
            <Text className="text-lg text-white font-extrabold">
              <Currency quantity={totalBasket} currency='GBP'/>
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
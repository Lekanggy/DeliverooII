import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addToBasket, selectBasketItems, selectBasketItemsWithId, removeFromBasket } from '../features/basketSlice'

const DishRow = ({id, name, description, price, image}) => {
  const [isPress, setIsPress] = useState(false)
  const items = useSelector((state)=> selectBasketItemsWithId(state, id), shallowEqual)
  const dispatch = useDispatch()
  const addItemToBasket = ()=>{
    dispatch(addToBasket({id, name, description, price, image}))
  }
  const removeFromBasketItem = ()=>{
    if(!items.length > 0) return;
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity 
        onPress={()=>setIsPress(!isPress)}
        className={`bg-white border border-gray-200 p-4 ${isPress && "border-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency='GBP'/>
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderColor: "#F3F3F4",
                borderWidth: 1
              }}
              source={{uri: urlFor(image).url()}}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {
        isPress && (
          <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
              <TouchableOpacity>
               <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray" }
                size={40}
                onPress={removeFromBasketItem}
               />
              </TouchableOpacity>
              <Text>{items.length}</Text>
              <TouchableOpacity>
               <PlusCircleIcon
                color="#00CCBB"
                size={40}
                onPress={addItemToBasket}
               />
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </>
    
   
  )
}

export default DishRow
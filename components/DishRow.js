import { View, Text } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'

const DishRow = ({id, name, description, price, image}) => {
  return (
    <View>
      <Text className="text-lg mb-1">{name}</Text>
      <Text className="text-gray-400">{description}</Text>
      <Text className="text-gray-400 mt-2">
        <Currency quantity={price} currency='GBP'/>
      </Text>
    </View>
  )
}

export default DishRow
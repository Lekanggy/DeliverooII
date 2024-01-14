import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeatureRow = ({id, title, description}) => {

    const [restaurants, setRestaurants] = useState([])
    useEffect(()=>{
        sanityClient.fetch(`
            *[_type =="featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type->{
                name
              }
            }
            
          }[0]
        `, { id }).then(data=> setRestaurants(data?.restaurants))
    }, [])

  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
        >
            {/* Resturant card... */}
            {
                restaurants?.map(d=>
                    <RestaurantCard
                        key={d?._id}
                        id={d?._id}
                        imgUrl={d?.image}
                        title={d?.name}
                        rating={d?.rating}
                        genre={d?.type?.name} 
                        address={d?.address} 
                        short_description={d?.short_description}
                        dishes={d?.dishes} 
                        lon={d?.long}
                        lat={d?.lat}
                    />
                )
            }
           
        </ScrollView>
    </View>
  )
}

export default FeatureRow
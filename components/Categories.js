import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type =="category"]
     `
    ).then(data=>setCategories(data))
  }, [])

  return (
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    showsHorizontalScrollIndicator={false}
    >
      {
        categories?.map(d=>
            <CategoryCard 
              key={d?._id}
              imgUrl={urlFor(d?.image).width(200).url()}
              title={d?.name}
            />
          )
      }
     
    </ScrollView>
  )
}
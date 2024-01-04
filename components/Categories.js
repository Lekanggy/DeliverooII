import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    showsHorizontalScrollIndicator={false}
    >
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 1"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 2"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 3"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 1"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 2"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 3"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 1"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 2"/>
     <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test 3"/>
    </ScrollView>
  )
}
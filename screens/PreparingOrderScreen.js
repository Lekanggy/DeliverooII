import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("DeliveryScreen")
        }, 3000)
    }, [])

  return (
    <SafeAreaView className="flex-1 justify-center item-center  bg-[#00CCBB]">
      <Animatable.Image 
        source={require("../assets/delive.gif")}
        iterationCount={1}
        animation="slideInUp"
        className="h-96 w-96"
     />
      <Animatable.Text 
        iterationCount={1}
        animation="slideInUp"
        className="text-lg text-white font-bold my-10 text-center"
      >
        Waiting for restaurant to accept your order!
     </Animatable.Text>
     <View className="justify-center items-center">
        <Progress.Circle size={66} indeterminate={true} color="white"/>
     </View>
     
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
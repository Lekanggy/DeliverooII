import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
          <Stack.Screen 
            name="Basket" 
            component={BasketScreen}
            options={{
              headerShown: false,
              presentation: "modal"
            }}
          />

          <Stack.Screen 
            name="PreparingOrderScreen" 
            component={PreparingOrderScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal"
            }}
          />
          <Stack.Screen 
            name="DeliveryScreen" 
            component={DeliveryScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal"
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
   
  );
}


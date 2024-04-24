import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import AutoCarousel from './Components/AutoCarousel';
import ProductDetails from './Components/ProductDetails';
// Import GestureHandlerRootView here
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="/products" component={ProductDetails} />
          <Stack.Screen name="/carosal" component={AutoCarousel} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

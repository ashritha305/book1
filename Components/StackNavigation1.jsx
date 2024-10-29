
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import Login1 from './Login1';
import HomeScreen1 from './HomeScreen1';
import React from 'react'
const Stack = createNativeStackNavigator();


const StackNavigation1 = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        
      <Stack.Screen name="Home"  component={HomeScreen1} 
      options={{
        headerTitle: 'Home',
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        gestureEnabled: true, // Disable swipe back gesture
      }} 
      />
      <Stack.Screen name="Loginn" component={Login1} /> 
      
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigation1
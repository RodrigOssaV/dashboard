import React from 'react'
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  LoginScreen from "./screens/login";
import  HomeScreen  from "./screens/home";
import DriverScreen from "./screens/driver";
import SupplierScreen from "./screens/supplier";

import driverForm from "./forms/driverForm";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "LoginScreen"
          component = {LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
        }}
        />
        <Stack.Screen 
          name = "HomeScreen"
          component = {HomeScreen}
          options={{
            title: 'Home App',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }}
        />
        <Stack.Screen 
          name = "DriverScreen"
          component = {DriverScreen}
          /* options={{
            title: 'Drivers',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }} */
          options = {({navigation}) => (
            {
              title: 'Drivers',
              headerStyle: {backgroundColor: '#222f3e'}, 
              headerTitleStyle: {color: '#ffffff'},
              headerTintColor: '#ffffff',
              headerRight: () => (
                <TouchableOpacity onPress = {() => navigation.navigate('DriverFormScreen')}>
                  <Text style={{
                    color: '#ffffff',
                    marginRight: 20,
                    fontSize: 15
                  }}>New</Text>
                </TouchableOpacity>
              )
            }
          )}
        />
        <Stack.Screen
          name = "SupplierScreen"
          component = {SupplierScreen}
          options={{
            title: 'Suppliers',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }}
        />
        <Stack.Screen
          name = "DriverFormScreen"
          component = {driverForm}
          options={{
            title: 'Create driver',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

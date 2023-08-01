import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import { StatusBar } from 'expo-status-bar'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveBackgroundColor: 'white',
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingTop: 10
        },
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Marker Felt',
          color: 'black',
          paddingBottom: 20
        }
      }}
    >
      <Tab.Screen
        name={'Bungee                                          Message'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={30}
              color={focused ? '#ff660d':'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'search'}
              size={30}
              color={focused ? '#ff660d':'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'main'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={30}
              color={focused ? '#ff660d':'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'y'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={30}
              color={focused ? '#ff660d':'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'z'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'settings'}
              size={30}
              color={focused ? '#ff660d':'black'}
            />
          )
        }}
      />
    </Tab.Navigator>
    
  )
}

export default Tabs

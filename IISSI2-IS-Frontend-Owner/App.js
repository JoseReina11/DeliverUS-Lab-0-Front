import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import ControlPanelScreen from '/src/screens/controlPanel/ControlPanelScreen'
import ProfileScreen from '/src/screens/profile/ProfileScreen'
import RestaurantsScreen from '/src/screens/restaurants/RestaurantsScreen'
import RestaurantsStack from './src/screens/restaurants/RestaurantsStack'
//HE QUITADO LOS PUNTOS EN ALGUNAS RUTAS PORQUE ME SALTABA ERROR 


const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsScreen} />
        <Tab.Screen
          name="Control Panel"
          component={ControlPanelScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} />
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
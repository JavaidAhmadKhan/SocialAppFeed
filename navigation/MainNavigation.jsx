import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Pofile'
import { Routes } from './Routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainMenuNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{ header: () => null, headerShown: false }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    )
}

const MainNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Home}
            screenOptions={{ header: () => null, headerShown: false }}>
            <Stack.Screen name='Drawer' component={MainMenuNavigation} />
        </Stack.Navigator>
    )
}

export default MainNavigation
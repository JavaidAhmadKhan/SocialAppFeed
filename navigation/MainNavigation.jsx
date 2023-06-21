import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Pofile'
import { Routes } from './Routes';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Home}
            screenOptions={{ header: () => null, headerShown: false }}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Stack.Navigator>
    )
}

export default MainNavigation
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Pofile'
import { Routes } from './Routes';
import { Text, View } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Text>Tab1</Text>
        </View>
    )
}

const Tab2 = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tab2</Text>
        </View>
    )
}
const Tab3 = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tab3</Text>
        </View>
    )
}


export const ProfileTabNavigation = () => {
    return (
        <ProfileTabs.Navigator screenOptions={{
            tabBarIndicatorStyle: {
                backgroundColor: 'transparent'
            },
            tabBarStyle: {
                elevation: 0,
                zIndex: 0,
            }
        }}>
            <ProfileTabs.Screen name='Tab1' component={Tab1} options={{
                tabBarLabel: ({ focused }) => {
                    return (
                        <ProfileTabTitle title='Photos' isFocused={focused} />
                    )
                }
            }} />
            <ProfileTabs.Screen name='Tab2' component={Tab2}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <ProfileTabTitle title='Videos' isFocused={focused} />
                        )
                    }
                }}
            />
            <ProfileTabs.Screen name='Tab3' component={Tab3}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <ProfileTabTitle title='Saved' isFocused={focused} />
                        )
                    }
                }}
            />
        </ProfileTabs.Navigator>
    );
}

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
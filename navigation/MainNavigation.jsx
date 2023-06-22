import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Pofile'
import { Routes } from './Routes';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../components/ProfileTabPost/ProfileTabPost';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

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
            <ProfileTabs.Screen
                name='Photos'
                component={ProfileTabPost}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <ProfileTabTitle title='Photos' isFocused={focused} />
                        )
                    }
                }} />
            <ProfileTabs.Screen
                name='Videos'
                component={ProfileTabPost}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <ProfileTabTitle title='Videos' isFocused={focused} />
                        )
                    }
                }}
            />
            <ProfileTabs.Screen
                name='Saved'
                component={ProfileTabPost}
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
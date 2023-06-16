import { View, Image } from 'react-native'
import React from 'react'
import style from './user-profile-style'

const UserProfileImage = () => {
    return (
        <View style={style.userImageContainer}>
            <Image source={require("../../assets/images.png")} />
        </View>
    )
}

export default UserProfileImage
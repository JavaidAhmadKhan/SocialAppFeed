import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import style from './profile-tab-post.style'

const ProfileTabPost = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={style.profileTabPostsContainer}
        >
            <View style={style.imageContainer}>
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
            </View>
            <View style={style.imageContainer}>
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
            </View>
            <View style={style.imageContainer}>
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
            </View>
            <View style={style.imageContainer}>
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
            </View>
            <View style={[style.imageContainer, style.lastImageContainer]}>
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
                <Image style={style.image} resizeMode='contain' source={require('../../assets/images/default_post.png')} />
            </View>
        </ScrollView>
    )
}

export default ProfileTabPost
import { Text, SafeAreaView, View, ScrollView, Image } from 'react-native'
import React from 'react'
import globalStyle from '../../styles/main'
import style from './profile-style'

const Pofile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/images.png')} />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Javaid Khan</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>96</Text>
            <Text style={style.singleStatText}>Following</Text>
          </View>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>321K</Text>
            <Text style={style.singleStatText}>Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>355</Text>
            <Text style={style.singleStatText}>Posts</Text>
          </View>
        </View>
        <View style={style.border}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Pofile
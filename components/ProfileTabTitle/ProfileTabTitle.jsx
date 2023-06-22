import { Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import style from '../ProfileTabTitle/profile-tab-title.style';

const ProfileTabTitle = (props) => {
    return (
        <Text style={[
            style.title,
            {
                color: props.isFocused ? '#022150' : '#79869F',
                fontWeight: props.isFocused ? '500' : '400'
            },
        ]}>
            {props.title}
        </Text>
    )
}

ProfileTabTitle.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

export default ProfileTabTitle
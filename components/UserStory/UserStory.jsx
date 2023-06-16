import { View, Text, Image } from "react-native";
import React from "react";
import PropTypes from 'prop-types';

import styles from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

UserStory.propTypes = {
  name: PropTypes.string.isRequired,
}

export default UserStory;

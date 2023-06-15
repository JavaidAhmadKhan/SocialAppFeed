import { View, Text, Image } from "react-native";
import React from "react";
import PropTypes from 'prop-types';

import styles from "./style";

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <View style={styles.userImageContainer}>
        <Image source={require("../../assets/images.png")} />
      </View>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

UserStory.propTypes = {
  name: PropTypes.string.isRequired,
}

export default UserStory;

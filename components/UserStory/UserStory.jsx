import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./style";

const UserStory = ({ name }) => {

  return (
    <View style={styles.storyContainer}>
      <View style={styles.userImageContainer}>
        <Image source={require("../../assets/images.png")} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default UserStory;

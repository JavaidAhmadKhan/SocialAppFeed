import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card} />
      <View style={{ display: "flex", gap: "5px" }}>
        <Text style={styles.textHeading}>Allison Becker</Text>
        <Text style={styles.textSubHeading}>Sukabumi, Jawa Barat</Text>
      </View>
    </View>
  );
};

export default Card;

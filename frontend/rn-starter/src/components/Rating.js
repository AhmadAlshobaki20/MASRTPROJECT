import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";

const Rating = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar source={require("../../assets/start.jpg")} rounded size="xlarge"/>
      <Text>Rating</Text>
    </TouchableOpacity>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

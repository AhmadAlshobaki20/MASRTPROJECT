import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

const Service = ({ title, onPress, image }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar source={image} rounded size="xlarge" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

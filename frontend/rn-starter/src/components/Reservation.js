import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";

const Reservation = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar source={require("../../assets/res.jpg")} rounded size="xlarge"/>
      <Text>appintemnet</Text>
    </TouchableOpacity>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

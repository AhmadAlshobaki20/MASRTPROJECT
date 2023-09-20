import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const subject = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/techLogo.png")} />
      <Text>subjects</Text>
    </View>
  );
};

export default subject;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

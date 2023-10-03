import { Text, View, StyleSheet, Image, Button } from "react-native";
import React, { Component, useState, useEffect } from "react";
import * as Progress from "react-native-progress";

const firstSplash = ({ navigation }) => {
  const [prog, setProg] = useState(0.1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setProg(prog + 0.4);
    }, 900);

    if (prog >= 0.9) {
      clearInterval(myInterval);
      navigation.navigate("secondSplash");
    }
    return () => clearInterval(myInterval);
  }, [prog]);

  return (
    <View style={Style.container}>
      <Image
        style={Style.logoStyle}
        source={require("../../../assets/student.png")}
      />
      <Text style={Style.textStyle}>ShowBook</Text>
      <Progress.Bar progress={prog} width={200} />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoStyle: {
    height: 120,
    width: 120,
    margin: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
});

export default firstSplash;

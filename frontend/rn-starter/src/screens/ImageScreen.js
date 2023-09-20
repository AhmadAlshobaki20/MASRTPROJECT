import React, { useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import ImageDetails from "../components/ImageDetiels";
const ImageScreen = () => {
  return <View style={Style.container}>
    <ImageDetails title="forest" image={require("../../assets/forest.jpg")} score={10}/>
    <ImageDetails title="mountain" image={require("../../assets/mountain.jpg")} score={8}/>
    <ImageDetails title="beach" image={require("../../assets/beach.jpg")} score={8}/>
  </View>
};

const Style = StyleSheet.create({});

export default ImageScreen;

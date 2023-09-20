import React from "react";
import { Text, View, StyleSheet,Image} from "react-native";

const ImageDetails = (props) => {
  

  return <>
    <View style={Style.container}>
    <Image source={props.image}/>
    <Text>{props.title}</Text>
    <Text>Image-score {props.score}</Text>
    </View>
  </>;
};

const Style = StyleSheet.create({
  textStyle :{
    marginVertical:50
  }
});

export default ImageDetails;

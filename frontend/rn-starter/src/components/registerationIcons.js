import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const RegistrationIcons = ({ caption }) => {
  return (
    <View style={Style.container}>
      <Text style={{ marginTop: 20 }}>{caption}</Text>
      <View style={Style.touchableStyle}>
        <TouchableOpacity style={Style.touchableStyleInner}>
          <Image
            source={require("../../assets/facebook.png")}
            style={Style.iconStyle}
          />
          <View>
            <Text style={{marginHorizontal:5}}>facebook</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold" }}>or</Text>
        <TouchableOpacity style={Style.touchableStyleInner}>
          <Image
            source={require("../../assets/google1.png")}
            style={Style.iconStyle}
          />
          <Text style={{marginHorizontal:5}}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableStyle: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  touchableStyleInner: {
    borderWidth:1,
    borderColor:"#cccccc",
    flexDirection: "row",
    padding: 10,
    width: 150,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5",
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
});

export default RegistrationIcons;

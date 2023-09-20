import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
const secondSplash = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <Image
        style={Style.logoStyle}
        source={require("../../../assets/student.png")}
      />
      <Text style={Style.textStyle}>Venom</Text>
      <Text>Welcome to Venom Education App</Text>
      <TouchableOpacity
        style={Style.buttonStyle}
        title="next"
        onPress={() => {
          navigation.navigate("RegisterAs");
        }}
      >
        <Text style={Style.btnText}>next</Text>
      </TouchableOpacity>
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
  buttonStyle: {
    backgroundColor: "#3386b9",
    marginTop: 40,
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default secondSplash;

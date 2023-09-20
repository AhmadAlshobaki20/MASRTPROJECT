import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const input = ({ title, Email, handleEmail, Password, handlePassword }) => {
  return (
    <View>
      {/* <Text>{title}</Text> */}
      <TextInput 
       

       />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    width: 300,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default input;

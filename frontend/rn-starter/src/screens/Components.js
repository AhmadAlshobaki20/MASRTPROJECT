import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "ahmad";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color:"pink"
  },
  subHeaderStyle:{
    fontSize:20,
    color:"black"
  }
});

export default ComponentScreen;

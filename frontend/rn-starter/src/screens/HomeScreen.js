import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello I'm Ahmad</Text>
      <Button
        title="Go to component Demo"
        onPress={() => {
          props.navigation.navigate("Components");
        }}
      />
      <Button
      title="Go To Demo List"
        onPress={() => { props.navigation.navigate('List')
        }}
      />
      <Button
      title="Go To Demo Image Screen"
        onPress={() => { props.navigation.navigate('ImageScreen')
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

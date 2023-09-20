import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const RegisterAs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/student.png")}
        />
        <Text style={styles.textStyle}>Venom</Text>
        <Text>registration pages</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("StudentRegister");
          }}
        >
          <Text style={styles.btnText}>Register As Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("TeacherRegister");
          }}
        >
          <Text style={styles.btnText}>Register As Teacher</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            navigation.navigate("LoginAs");
          }}
        >
          <Text style={{ color: "#3c8cb8" }}>I have already registered</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterAs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  upperSection: {
    alignItems: "center",
  },
  logoStyle: {
    height: 120,
    width: 120,
    margin: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#3386b9",
    marginTop: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 32,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

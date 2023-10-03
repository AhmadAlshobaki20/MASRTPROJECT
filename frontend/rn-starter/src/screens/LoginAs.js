import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const LoginAs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Image
          style={styles.logoStyle}
          source={require("../../assets/student.png")}
        />
        <Text style={styles.textStyle}>ShowBook</Text>
        <Text>login pages</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("StudentLogin");
          }}
        >
          <Text style={styles.btnText}>Login As Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("TeacherLogin");
          }}
        >
          <Text style={styles.btnText}>Login As Teacher</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            navigation.navigate("RegisterAs");
          }}
        >
          <Text>
            Do you have account ?{" "}
            <Text style={styles.register}>create account</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginAs;

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
  register: {
    margin: 10,
    color: "#3386b9",
  },
});

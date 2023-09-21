import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/input";
import RegistrationIcons from "../../components/registerationIcons";
import api from "../../../api";
import { DataContext } from "../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StudentLogin({ navigation }) {
  const { handleLoginForm, studentLogin } = useContext(DataContext);

  return (
    <KeyboardAvoidingView
      style={Style.flexStyle}
      enabled={true}
      behavior={"padding"}
    >
      {/* <SafeAreaView style={Style.flexStyle}> */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={Style.container}>
          <Image
            style={Style.logoStyle}
            source={require("../../../assets/student.png")}
          />
          <Text style={Style.textStyle}>Students Login</Text>
          <RegistrationIcons caption="login by using" />
          <View>
            <View>
              <Text style={{ marginLeft: 20 }}>Email</Text>
              <TextInput
                placeholder="Email"
                style={Style.input}
                onChangeText={(val) => {
                  handleLoginForm("email", val);
                }}
              />
            </View>
            <View>
              <Text style={{ marginLeft: 20 }}>Password</Text>
              <TextInput
                placeholder="Password"
                style={Style.input}
                onChangeText={(val) => {
                  handleLoginForm("password", val);
                }}
                secureTextEntry
              />
            </View>
            {/* <TouchableOpacity>
              <Text>forgot password</Text>
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity
            style={Style.buttonStyle}
            onPress={() => {
              studentLogin({navigation});
            }}
          >
            <Text style={Style.btnText}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.register}
            onPress={() => {
              navigation.navigate("StudentRegister");
            }}
          >
            <Text>
              Do you have account ?{" "}
              <Text style={Style.register}>create account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  logoStyle: {
    height: 70,
    width: 90,
    margin: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  touchableStyle: {
    flexDirection: "row",
    padding: 10,
  },
  touchableStyleInner: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    width: 150,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5",
  },
  iconStyle: {
    width: 25,
    height: 25,
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
  flexStyle: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 15,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderColor: "#cccccc",
    borderRadius: 10,
    backgroundColor: "white",
  },
});

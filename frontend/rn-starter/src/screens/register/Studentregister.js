import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useContext, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RegistrationIcons from "../../components/registerationIcons";
import { DataContext } from "../context/context";
const gender = ["select gender", "male", "female"];
export default function Studentregister({navigation}) {
  const { handleForm, registerInfo, setRegisterInfo, studentRegister } =
    useContext(DataContext);

  const customStyles = {
    buttonStyle: {
      height: 42,
      margin: 10,
      width: 350,
      borderWidth: 1,
      padding: 10,
      borderColor: "#cccccc",
      borderRadius: 10,
      backgroundColor: "white",
    },
    dropdownTextStyle: {
      fontSize: 10,
      color: "blue",
    },
    rowTextStyle: {
      fontSize: 15,
    },
  };

  return (
    <KeyboardAvoidingView
      style={Style.flexStyle}
      enabled={true}
      behavior={"padding"}
    >
      <ScrollView
        style={Style.scrollingView}
        contentContainerStyle={{ flexGrow: 3 }}
      >
        {/* <SafeAreaView style={Style.flexStyle}> */}
        <View style={Style.container}>
          <Image
            style={Style.logoStyle}
            source={require("../../../assets/student.png")}
          />
          <Text style={Style.textStyle}>Students register</Text>
          <View>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              style={Style.input}
              onChangeText={(val) => {
                handleForm("username", val);
              }}
            />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              style={Style.input}
              onChangeText={(val) => {
                handleForm("email", val);
              }}
            />
            <SelectDropdown
              defaultButtonText="gender"
              defaultButtonTextStyle={customStyles.dropdownTextStyle}
              buttonStyle={customStyles.buttonStyle}
              rowTextStyle={customStyles.rowTextStyle}
              data={gender}
              onSelect={(itemSelected, index) => {
                setRegisterInfo({ ...registerInfo, gender: itemSelected });
              }}
            />
            <TextInput
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              style={Style.input}
              secureTextEntry
              onChangeText={(val) => {
                handleForm("password", val);
              }}
            />
            <TextInput
              placeholder="ConfirmPassword"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              style={Style.input}
              onChangeText={(val) => {
                handleForm("ConfirmPassword", val);
              }}
            />
          </View>
          <RegistrationIcons caption="register by using" />
          <TouchableOpacity
            style={Style.buttonStyle}
            onPress={() => {
              studentRegister();
              navigation.navigate('StudentLogin');
            }}
          >
            <Text style={Style.btnText}>register</Text>
          </TouchableOpacity>
        </View>
        {/* </SafeAreaView> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
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
  input: {
    height: 40,
    margin: 10,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderColor: "#cccccc",
    borderRadius: 10,
  },
  logoStyle: {
    height: 70,
    width: 90,
    margin: 10,
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
  register: {
    margin: 20,
    color: "#3386b9",
  },
  flexStyle: {
    flex: 1,
  },
  scrollingView: {
    // marginVertical: 60,
  },
  touchableStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

  dropdownStyle: {
    // Customize the dropdown style here
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});

import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const TeacherButtomNav = ({ navigation, teacherInfo }) => {
  return (
    <SafeAreaView>
      <LinearGradient
        // Button Linear Gradient
        colors={["#000000", "#33b9ac"]}
        start={{ x: 0, y: 0 }}
        style={styles.container}
        >

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TeacherHomeScreen");
          }}
        >
          <Entypo name="home" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Request", { teacher: teacherInfo });
          }}
        >
          <FontAwesome name="book" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TeacherProfile", {
              teacherInfo: teacherInfo,
            });
          }}
        >
          <MaterialCommunityIcons name="account-box" style={styles.iconStyle} />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TeacherButtomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#12352f",
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    padding: 5,
  },
  iconStyle: {
    fontSize: 30,
    color: "white",
  },
});

import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
const TeacherButtomNav = ({ navigation, teacherInfo }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("TeacherHomeScreen")
        }}>
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
      </View>
    </SafeAreaView>
  );
};

export default TeacherButtomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#01a8a8",
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 5,
  },
  iconStyle: {
    fontSize: 40,
    color: "white",
  },
});

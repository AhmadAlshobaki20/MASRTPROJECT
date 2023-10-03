import React, { useContext } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { DataContext } from "../screens/context/context";

const StudentButtomNav = ({ navigation }) => {
  const { StudentInfo } = useContext(DataContext);
  return (
    <SafeAreaView>
      <LinearGradient
        // Button Linear Gradient
        colors={["#000000", "#3386b9"]}
        start={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Entypo name="home" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StudentTeachersScreen");
          }}
        >
          <Ionicons name="book" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StudentProfile", { student: StudentInfo });
          }}
        >
          <MaterialCommunityIcons name="account-box" style={styles.iconStyle} />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default StudentButtomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#12352f",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 5,
  },
  iconStyle: {
    fontSize: 30,
    color: "white",
  },
});

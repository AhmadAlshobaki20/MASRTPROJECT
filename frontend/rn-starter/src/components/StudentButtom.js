import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
const StudentButtomNav = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Entypo name="home" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="book" style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account-box" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StudentButtomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3386b9",
  },
  iconStyle: {
    fontSize: 40,
    color: "white",
  },
});

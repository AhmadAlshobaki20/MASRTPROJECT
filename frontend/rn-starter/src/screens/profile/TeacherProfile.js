import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { Feather, MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TeacherProfile = ({navigation}) => {
  const teacherInfo = navigation.getParam("teacherInfo");
  console.log("teacherInfo ->",teacherInfo);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          source={require("../../../assets/techLogo.png")}
          rounded
          size="large"
        />
        <View>
          <Text style={styles.textNameStyle}>{teacherInfo["teacher"].username}</Text>
          <Text style={styles.textRoleStyle}>Teacher</Text>
        </View>
      </View>
      <View>
        <View style={styles.contactStyle}>
          <Feather
            name="phone-call"
            size={20}
            color="#3386b9"
            style={styles.innerContactStyle}
          />
          <Text>{teacherInfo["teacher"].phone}</Text>
        </View>
        <View style={styles.contactStyle}>
          <MaterialIcons
            name="email"
            size={20}
            color="#3386b9"
            style={styles.innerContactStyle}
          />
          <Text>{teacherInfo["teacher"].email}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            width: 320,
            height: 0,
            borderColor: "#3386b9",
            borderWidth: 0.3,
            margin: 20,
          }}
        ></Text>
        <Text style={{ fontWeight: "bold" }}>Teacher Profile</Text>
        <Text
          style={{
            width: 320,
            height: 0,
            borderColor: "#3386b9",
            borderWidth: 0.3,
            margin: 20,
          }}
        ></Text>
      </View>
      <View>
        <View style={styles.iconProfileStyle}>
          <MaterialIcons name="request-page" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>Reservation</Text>
        </View>
        <View style={styles.iconProfileStyle}>
          <MaterialIcons name="star-rate" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>Rating</Text>
        </View>
        <View style={styles.iconProfileStyle}>
          <AntDesign name="setting" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>Setting</Text>
        </View>
        <TouchableOpacity style={styles.iconProfileStyle} onPress={async() => {
          await AsyncStorage.removeItem('teacher')
          navigation.navigate("TeacherLogin");
        }}>
          <Entypo name="log-out" size={24} color="#ff8ca0" />
          <Text style={{ color: "#ff8ca0", marginHorizontal: 15 }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textNameStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  textRoleStyle: {
    fontSize: 15,
    fontWeight: "light",
    marginHorizontal: 10,
  },
  contactStyle: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  innerContactStyle: {
    marginHorizontal: 10,
  },
  iconProfileStyle: {
    flexDirection: "row",
    margin: 25,
    alignItems: "center",
  },
  innerIconProfileStyle: {
    marginHorizontal: 15,
  },
});

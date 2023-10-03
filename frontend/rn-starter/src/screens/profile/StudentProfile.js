import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { Feather, MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const StudentProfile = ({navigation}) => {
  const student = navigation.getParam("student");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4491b6" }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          source={require("../../../assets/TeacherOffer.png")}
          rounded
          size="large"
        />
        <View>
          <Text style={styles.textNameStyle}>{student.username}</Text>
          <Text style={styles.textRoleStyle}>Student</Text>
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
          <Text>0787014262</Text>
        </View>
        <View style={styles.contactStyle}>
          <MaterialIcons
            name="email"
            size={20}
            color="#3386b9"
            style={styles.innerContactStyle}
          />
          <Text>{student.email}</Text>
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
        <Text style={{fontWeight:"bold"}}>Student Profile</Text>
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
        <TouchableOpacity style={styles.iconProfileStyle}>
          <AntDesign name="hearto" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>Your Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconProfileStyle}>
          <Entypo name="book" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>lesson</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconProfileStyle}>
          <AntDesign name="setting" size={24} color="#3386b9" />
          <Text style={styles.innerIconProfileStyle}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconProfileStyle} onPress={async()=>{
            await AsyncStorage.removeItem('user');
            navigation.navigate("StudentLogin");
        }}>
          <Entypo name="log-out" size={24} color="#ff8ca0" />
          <Text style={{ color: "#ff8ca0", marginHorizontal: 15 }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default StudentProfile;

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

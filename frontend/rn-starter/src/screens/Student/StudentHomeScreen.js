import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements/dist";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataContext } from "../context/context";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentButtomNav from "../../components/StudentButtom";
import Service from "../../components/Service";

const StudentHomeScreen = ({ navigation }) => {
  const { StudentInfo } = useContext(DataContext);
  // const [StudentInfo, setStudentInfo] = useState({});
  // // useEffect(() => {
  //   // getUserData();
  // }, []);

  // console.log();
  // const getUserData = async () => {
  //   const studentInfo = await AsyncStorage.getItem("user");
  //   setStudentInfo(JSON.parse(studentInfo));
  // };
  return (
    <SafeAreaView style={{ backgroundColor: "#3b8bb7", flex:1 }}>
      <ScrollView style={{flex:1, backgroundColor:"white"}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("StudentProfile", { student: StudentInfo });
              }}
            >
              <Avatar
                source={require("../../../assets/TeacherOffer.png")}
                rounded
              />
            </TouchableOpacity>
            <View>
              <Text>welcome to ShowBook</Text>
              <Text style={styles.nameStyle}>{StudentInfo.username}</Text>
              <View style={styles.HeaderIcon}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("StudentTeachersScreen");
                  }}
                >
                  <FontAwesome5
                    style={styles.icons}
                    name="chalkboard-teacher"
                    color="black"
                  />
                </TouchableOpacity>
                <MaterialIcons
                  name="favorite-border"
                  style={styles.icons}
                  color="black"
                />
              </View>
            </View>
          </View>
          <View style={styles.textInput}>
            <Feather
              name="search"
              style={{ fontSize: 30, alignSelf: "center", color: "gray" }}
              color="black"
            />
            <TextInput style={styles.input} placeholder="search" />
          </View>
          <Text style={styles.caption}>special Offer</Text>
          <View style={styles.sectionTow}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#000000", "#3386b9"]}
              start={{ x: 0, y: 0 }}
              style={styles.offerStyle}
            >
              <Image
                style={{
                  width: 90,
                  height: 120,
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                source={require("../../../assets/TeacherOffer.png")}
              />
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  top: 20,
                  left: 10,
                }}
              >
                <Text style={styles.textOfferStyle}>offer 50%</Text>
                <Text style={styles.textOfferStyle}>
                  when you Reserve Teachers
                </Text>
                <TouchableOpacity style={styles.btnStyle}>
                  <Text>Reserve Now</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>

          <View>
            <Text style={styles.caption}>Features</Text>
            <View style={styles.featureStyle}>
              <Service
                image={require("../../../assets/1585587.jpg")}
                title="Teachers"
                onPress={() => {
                  navigation.navigate("StudentTeachersScreen");
                }}
              />
              <Service
                image={require("../../../assets/download.jpg")}
                title="Subject"
                onPress={() => {
                  navigation.navigate("");
                }}
              />
            </View>
            <View style={styles.featureStyle}>
              <Service
                image={require("../../../assets/refeneces.png")}
                title="References"
                onPress={() => {
                  navigation.navigate("");
                }}
              />
            </View>
          </View>
          <StudentButtomNav navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
  },
  HeaderIcon: {
    flexDirection: "row",
    position: "absolute",
    right: -150,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  icons: {
    fontSize: 20,
    marginHorizontal: 6,
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  sectionTow: {
    marginHorizontal: 20,
  },
  offerStyle: {
    justifyContent: "space-around",
    borderRadius: 10,
    height: 130,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  textOfferStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
  },
  btnStyle: {
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "border",
    width: 110,
    height: 30,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  caption: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  featureStyle: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
  },
  textInput: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 18,
  },
});

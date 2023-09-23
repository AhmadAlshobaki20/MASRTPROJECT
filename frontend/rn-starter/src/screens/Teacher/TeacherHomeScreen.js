import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements/dist";
import Reservation from "../../components/Reservation";
import Rating from "../../components/Rating";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { DataContext } from "../context/context";
import { SafeAreaView } from "react-navigation";
import TeacherButtomNav from "../../components/TeacherButtom";

const TeacherHomeScreen = ({ navigation }) => {
  const { teacherInfo } = useContext(DataContext);
  return (
    <ScrollView style={{ flexGrow: 1, backgroundColor: "#3fc7ac" }}>
      <SafeAreaView style={{ backgroundColor: "#3fc7ac", position: "sticky" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <View> */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                  navigation.navigate("TeacherProfile", {
                    teacherInfo: teacherInfo,
                  });
                }}
              >
                <Avatar
                  source={require("../../../assets/imag.png")}
                  rounded
                  style={{ height: 50, width: 50, objectFit: "contain" }}
                />
              </TouchableOpacity>
              <View>
                <Text>Good morning</Text>
                <Text style={styles.nameStyle}>{teacherInfo.username}</Text>
              </View>
            </View>
            <View style={styles.HeaderIcon}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Request", { teacher: teacherInfo });
                }}
              >
                <FontAwesome name="book" style={styles.icons} color="black" />
              </TouchableOpacity>
              <MaterialIcons
                name="favorite-border"
                style={styles.icons}
                color="black"
              />
            </View>
            {/* </View> */}
          </View>
          <View style={styles.textInput}>
            <Feather
              name="search"
              style={{ fontSize: 30, alignSelf: "center", color: "gray" }}
              color="black"
            />
            <TextInput style={styles.input} placeholder="search" />
          </View>
          {/* <Text style={styles.caption}>special Offer</Text> */}
          <View style={styles.sectionTow}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#000000", "#33b9ac"]}
              start={{ x: 0, y: 0 }}
              style={styles.offerStyle}
            >
              <Image
                style={{
                  width: 140,
                  height: 120,
                  position: "absolute",
                  top: 10,
                  right: 20,
                  borderRadius: 10,
                }}
                source={require("../../../assets/imag.png")}
              />
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  top: 20,
                  left: 30,
                }}
              >
                <Text style={styles.textOfferStyle}>Welcome</Text>
                <Text style={styles.textOfferStyle}>To our application</Text>
                <Text style={styles.textOfferStyle}>Venom</Text>
              </View>
            </LinearGradient>
          </View>

          <View>
            <Text style={styles.caption}>Features</Text>
            <View style={styles.featureStyle}>
              <Reservation
                onPress={() => {
                  navigation.navigate("Request", { teacher: teacherInfo });
                  console.log("%^%^%^%^%^", teacherInfo);
                }}
              />
              <Rating />
            </View>
            <View style={styles.featureStyle}>
              <Reservation />
              <Rating />
            </View>
          </View>
          <TeacherButtomNav teacherInfo={teacherInfo} navigation={navigation} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
    // marginTop:20
  },
  header: {
    marginHorizontal: 30,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HeaderIcon: {
    flexDirection: "row",
    alignItems: "center",
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
    width: 120,
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

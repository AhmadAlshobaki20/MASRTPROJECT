import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api";
import { DataContext } from "./context/context";
import TeacherButtomNav from "../components/TeacherButtom";
import { SafeAreaView } from "react-native-safe-area-context";
const Request = ({ navigation }) => {
  const { reservations, Accept, Reject, getAllReservation } =
    useContext(DataContext);

  const teacherInfo = navigation.getParam("teacher");
  console.log("#@#@#@#@#@#@", teacherInfo);

  const specificReservation = reservations.filter((teacher) => {
    if (teacher.status == "pending") {
      return teacherInfo._id == teacher.teacherId;
    }
  });

  useEffect(() => {
    getAllReservation();
  }, []);
  return specificReservation.length ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4bd7ac" }}>
      <View style={styles.container}>
        <FlatList
          data={specificReservation}
          keyExtractor={(teacher) => teacher._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.wrap}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNCNPkntpX6DI5r10Oogle7zGzMfpEg_bYQ&usqp=CAU",
                  }}
                  style={styles.avatarStyle}
                />
                <View>
                  <Text>{item.studentName}</Text>
                  <Text>1:20 to 2:00</Text>
                  <Text>{item.createAt}</Text>
                </View>
                <View style={styles.btnInfoStyle}>
                  <TouchableOpacity
                    style={styles.acceptBtnStyle}
                    onPress={() => {
                      Accept(item._id);
                    }}
                  >
                    <Text style={styles.btnTextStyle}>accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.rejectBtnStyle}
                    onPress={() => {
                      Reject(item._id);
                    }}
                  >
                    <Text style={styles.btnTextStyle}>reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>There is no reservations</Text>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wrap: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  avatarStyle: {
    backgroundColor: "gray",
    width: 80,
    height: 80,
  },
  btnInfoStyle: {
    flexDirection: "row",
    width: 160,
    justifyContent: "space-around",
  },
  rejectBtnStyle: {
    backgroundColor: "#fa2418",
    padding: 10,
    borderRadius: 20,
    width: 70,
    alignItems: "center",
  },
  acceptBtnStyle: {
    backgroundColor: "#33d89e",
    padding: 10,
    borderRadius: 20,
    width: 70,
    alignItems: "center",
  },
  btnTextStyle: {
    color: "white",
  },
});

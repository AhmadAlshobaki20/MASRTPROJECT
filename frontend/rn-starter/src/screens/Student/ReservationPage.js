import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import React, { useContext, useState } from "react";
import PhoneInput from "react-native-phone-input";
import Model from "../../components/Model";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-navigation";
import { DataContext } from "../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentButtomNav from "../../components/StudentButtom";
const ReservationPage = ({ navigation }) => {
  const [selectDate, setSelectDate] = useState();
  const [visibleModel, setVisibleModel] = useState(false);
  const { handleReservationForm, reservationInfo, setReservationInfo } =
    useContext(DataContext);
  const teacher = navigation.getParam("tech");

  return (
    <SafeAreaView style={{ backgroundColor: "#3b8bb7", flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={Style.container}>
          <Text style={Style.textInput}>Reservation Page</Text>
          <View>
            <Calendar
              style={{
                borderWidth: 1,
                borderColor: "#cccccc",
                height: 310,
                width: 350,
                borderRadius: 10,
              }}
              onDayPress={(date) => {
                setSelectDate(date.dateString);
                if (new Date(date.dateString)) {
                  handleReservationForm(
                    "createAt",
                    new Date(date.dateString).toDateString()
                  );
                }
                console.log(typeof date.dateString+" "+Date(date.day));
              }}
              markedDates={{
                [selectDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
            />
          </View>
          <Text style={Style.textInput}>Reserve your appointment</Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={Style.input}
              placeholder="full name"
              onChangeText={(val) => {
                handleReservationForm("studentName", val);
              }}
            />
            <PhoneInput
              style={Style.input}
              placeholder="phone number"
              initialCountry={"jor"}
              initialValue="+962"
              name="phone"
              onChangePhoneNumber={(value) => {
                handleReservationForm("phone", +value);
                console.log(typeof +value);
              }}
            />
            <TouchableOpacity
              style={Style.buttonStyle}
              onPress={async () => {
                const std = await AsyncStorage.getItem("user");
                setVisibleModel(!visibleModel);
                setReservationInfo({
                  ...reservationInfo,
                  teacherId: teacher._id,
                  studentId: JSON.parse(std)._id,
                });
                console.log(reservationInfo);
              }}
            >
              <Text style={Style.btnText}>confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <StudentButtomNav /> */}
        {visibleModel ? <Model /> : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 600,
    paddingVertical: 10,
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
  textInput: {
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: "#3386b9",
    marginTop: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ReservationPage;

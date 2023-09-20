import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a new context
export const DataContext = createContext();

// Create a data provider component
const DataProvider = ({ children }) => {
  const [Teachers, setTeachers] = useState([]);
  const [registerInfo, setRegisterInfo] = useState({});
  const [loginInfo, setLoginInfo] = useState({});
  const [reservationInfo, setReservationInfo] = useState({});
  const [reservations, setReservations] = useState([]);

  const storeStudentData = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };
  const storeTeacherData = async (value) => {
    try {
      await AsyncStorage.setItem("teacher", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const handleForm = (name, value) => {
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleLoginForm = (name, value) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleReservationForm = (name, value) => {
    setReservationInfo({ ...reservationInfo, [name]: value });
  };

  const getAllTeachers = async () => {
    try {
      const response = await api.get("/api/v1/teachers");
      setTeachers(response.data.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  // Student register
  const studentRegister = async () => {
    try {
      const response = await api.post(
        "/api/v1/students/register",
        registerInfo
      );
      console.log("successful register");
    } catch (err) {
      console.log(err);
    }
  };
  // Student login
  const studentLogin = async () => {
    try {
      const response = await api.post("/api/v1/students/login", loginInfo);
      studentAuthentication(response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const studentAuthentication = async (token) => {
    try {
      const response = await api.post("/api/v1/students/authLogin", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      storeStudentData(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Reservation
  const addReservation = async () => {
    const response = await api.post(`/api/v1/reservation`, reservationInfo);
  };

  //Get All Reservations
  const getAllReservation = async () => {
    const response = await api.get(`/api/v1/reservation`);
    setReservations(response.data.data.AllReservation);
  };

  // Student register
  const teacherRegister = async () => {
    try {
      const response = await api.post(
        "/api/v1/teachers/register",
        registerInfo
      );
      console.log("register response is :", response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Student login
  const teacherLogin = async () => {
    try {
      const response = await api.post("/api/v1/teachers/login", loginInfo);
      teacherAuthentication(response.data.token);
      console.log("response.data.token ====== >>>>>>>>>", response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const teacherAuthentication = async (token) => {
    try {
      console.log(token);
      const response = await api.post("/api/v1/teachers/afterLogin", null, {
        headers: {
          Authorization: token,
        },
      });
      storeTeacherData(response.data);
      console.log("Teacher data === ", response);
    } catch (error) {
      console.log(error);
    }
  };

  const Accept = async (resId) => {
    const response = await api.patch(
      `/api/v1/reservation/accept-reservation/${resId}`,
      { status: "accepted" }
    );
    console.log(response.data);
  };
  const Reject = async (resId) => {
    const response = await api.patch(
      `/api/v1/reservation/reject-reservation/${resId}`,
      { status: "rejected" }
    );
    console.log(response.data);
  };

  const dataToShare = {
    registerInfo,
    getAllTeachers,
    getAllReservation,
    setRegisterInfo,
    studentRegister,
    studentLogin,
    teacherRegister,
    teacherLogin,
    handleForm,
    handleLoginForm,
    Teachers,
    addReservation,
    reservationInfo,
    setReservationInfo,
    handleReservationForm,
    reservations,
    Accept,
    Reject,
  };
  return (
    <DataContext.Provider value={dataToShare}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

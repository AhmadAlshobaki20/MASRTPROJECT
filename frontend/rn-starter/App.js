import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firstSplash from "./src/screens/splash/firstSplash";
import secondSplash from "./src/screens/splash/secondSplah";
import StudentLogin from "./src/screens/login/Studentlogin";
import StudentRegister from "./src/screens/register/Studentregister";
import TeacherLogin from "./src/screens/login/TeacherLogin";
import TeacherRegister from "./src/screens/register/TeacherRegister";
import StudentTeachersScreen from "./src/screens/Student/SrudentTeachersScreen";
import ReservationPage from "./src/screens/Student/ReservationPage";
import DataProvider from "./src/screens/context/context";
import StudentHomeScreen from "./src/screens/Student/StudentHomeScreen";
import TeacherHomeScreen from "./src/screens/Teacher/TeacherHomeScreen";
import Request from "./src/screens/Request";
import Model from "./src/components/Model";
import RegisterAs from "./src/screens/RegisterAs";
import LoginAs from "./src/screens/LoginAs";
import StudentProfile from "./src/screens/profile/StudentProfile";
import TeacherProfile from "./src/screens/profile/TeacherProfile";
import TeacherButtomNav from "./src/components/TeacherButtom";
import StudentButtomNav from "./src/components/StudentButtom";
import ComponentStatusBar from "./src/components/stackBar";
import TeacherReservation from "./src/screens/Teacher/TeachersReservation";
const navigator = createStackNavigator(
  {
    firstSplash,
    secondSplash,
    StudentLogin,
    StudentRegister,
    TeacherLogin,
    TeacherRegister,
    StudentTeachersScreen,
    ReservationPage,
    StudentHomeScreen,
    TeacherHomeScreen,
    Request,
    Model,
    RegisterAs,
    LoginAs,
    StudentProfile,
    TeacherProfile,
    TeacherButtomNav,
    StudentButtomNav,
    TeacherReservation,
  },
  {
    initialRouteName: "firstSplash",
    defaultNavigationOptions: {
      title: "Venom",
      headerShown: false, // Hide the default header for all screens
    },
  }
);
const Elements = createAppContainer(navigator);
const app = () => {
  return (
    <DataProvider>
      <ComponentStatusBar />
      <Elements />
    </DataProvider>
  );
};
export default app;

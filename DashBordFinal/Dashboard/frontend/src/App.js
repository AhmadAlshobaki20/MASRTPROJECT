// import "./App.css";
import "./css/bootstrap-datetimepicker.min.css";
import "./css/style.css";
import {
  Login,
  Signup,
  AdminDashboard,
  Students,
  Teachers,
  EditTeacher
} from "./component/intermidedry";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./component/DashBoard2/Dashboard/MainLayout";

function App() {
  // const token = get
  return (
    <>
      <Routes>
        <Route path="/loginDashBoard" element={<Login />} />
        <Route path="/signupDashBoard" element={<Signup />} />
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/TeachersRequest" element={<EditTeacher />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

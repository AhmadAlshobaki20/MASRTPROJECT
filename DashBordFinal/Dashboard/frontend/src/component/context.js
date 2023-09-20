import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const contextBoard = createContext();

const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [Admins, setAdmins] = useState([]);
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Students, setStudents] = useState([]);
  const [student, setSutdent] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    Subjects: [],
    Teachers: [],
  });
  const [Teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    Subjects: [],
    Students: [],
  });
  const [Token, setToken] = useState(null);
  useEffect(() => {
    getStudents();
    getTeachers();
  }, []);

  const [state, setState] = useState();
  const getAllAdmin = async () => {
    const response = await axios.get("api/v1/admin");
    console.log(response);
  };
  const registerAdmin = async () => {
    try {
      const response = await axios.post("api/v1/admin/register", admin);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const loginAdmin = async () => {
    try {
      const response = await axios.post("api/v1/admin/login", {
        email: admin.email,
        password: admin.password,
      });
      // Cookies.set("token", response.data.token);
      authentication(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // setHeader
  const authentication = async (token) => {
    try {
      const headers = {
        Authorization: token, // Example authorization header
        "Content-Type": "application/json", // Example content type header
        // Add any other headers as needed
      };
      console.log("header = ", headers);
      const response = await axios.post("api/v1/admin/afterLogin", headers);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //get All students
  const getStudents = async () => {
    try {
      const response = await axios.get("api/v1/students");
      setStudents(response.data.data.students);
    } catch (err) {
      console.log("Students Error :" + "  " + err);
    }
  };

  // delete specific student

  const deleteStudent = async (stdId) => {
    try {
      const response = await axios.delete(`api/v1/students/${stdId}`);
      const deleteStudent = Students.filter((student) => {
        return student._id !== stdId;
      });
      setStudents(deleteStudent);
    } catch (error) {
      console.log(error);
    }
  };
  // get All Teachers
  const getTeachers = async () => {
    try {
      const response = await axios.get("api/v1/teachers");
      setTeachers(response.data.data.teachers);
    } catch (err) {
      console.log("Teacher Error :" + "  " + err);
    }
  };

  // delete specific teachers
  const deleteTeachers = async (techId) => {
    try {
      await axios.delete(`api/v1/teachers/${techId}`);
      const deleteTeacher = Teachers.filter((teacher) => {
        return teacher._id !== techId;
      });
      setTeachers(deleteTeacher);
    } catch (error) {
      console.log(error);
    }
  };

  const dataToShare = {
    getAllAdmin,
    admin,
    setAdmin,
    registerAdmin,
    loginAdmin,
    getStudents,
    Students,
    Teachers,
    deleteStudent,
    deleteTeachers,
    getStudents,
    getTeachers,
    state,
  };

  return (
    <contextBoard.Provider value={dataToShare}>
      {children}
    </contextBoard.Provider>
  );
};
export { Provider };
export default contextBoard;

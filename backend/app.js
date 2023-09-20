const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./Router/StudentRouter");
const teacherRouter = require("./Router/TeacherRouter");
const AdminRouter = require("./Router/RouterAdmin");
const ReservationRouter = require("./Router/ReservationRouter");
// const SubjectRouter = require("./router/subject");
const cors = require("cors");

const app = express();
app.use(cors());
// call morgan middleware
app.use(morgan("dev"));
// call json() middleware
app.use(express.json());

// mounting process]
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/reservation", ReservationRouter);
// app.use("/api/v1/subject", SubjectRouter);
module.exports = app;

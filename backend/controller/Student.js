// import use Students model
const Students = require("../model/Student");
const Teacher = require("../model/Teacher");

// function to get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({
      result: students.length,
      status: "success",
      data: {
        students: students,
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};

// create new student

exports.AddStudent = async (req, res) => {
  try {
    const newStudent = await Students.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: `🧨 ${error}💣`,
    });
  }
};

// get specific student
exports.getStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Students.findById(studentId);
    res.status(200).json({
      status: "success",
      data: {
        student: student,
      },
    });
  } catch (error) {
    res.json({
      message: `🙎${error}💣`,
    });
  }
};

// update student
exports.updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentUpdate = await Students.findByIdAndUpdate(
      studentId,
      req.body,
      {
        new: true,
      }
    );
    res.status(202).json({
      status: "success",
      data: {
        student: studentUpdate,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: `➡️↘️${error}↙️⬇️`,
    });
  }
};

// Delete user
exports.deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Students.findByIdAndDelete(studentId);
    res.status(201).json({
      status: "success",
      student: null,
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: `❌🙎${error}❌🙎`,
    });
  }
};


exports.approval = async (req, res, next) => {
  try {
    const teachId = req.params.teacherId;
    const teacher = await Teacher.findById(teachId);
    // Check if the request body contains an "approve" field
    if (req.body.hasOwnProperty("approve")) {
      console.log(req.body)
      teacher.approve = req.body.approve;
      await teacher.save();
    } else {
      console.log("No 'approve' field in the request body");
    }
    next();
  } catch (error) {
    console.error("Error updating teacher:", error);
  }
};
// reservation function
exports.reservation = async (req, res, next) => {
  try {
    console.log(req.headers)
    const teacherId = req.params.teacherId;
    const stdId = req.params.stdId;
    const student = await Students.findById(stdId);
    const teacher = await Teacher.findById(teacherId);
    console.log(teacher);
    if (teacher.approve) {
      student.teacher.push(teacherId);
      student.save();
      return res.json({
        message: "accept",
      });
    } else {
      return res.json({
        message: "reject",
      });
    }
  } catch (err) {
    return res.json({
      message: err,
    });
  }
};


const Teachers = require("../model/Teacher");

// function to get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.find();
    res.status(200).json({
      result: teachers.length,
      status: "success",
      data: {
        teachers: teachers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// create new teacher

exports.AddTeacher = async (req, res) => {
  try {
    const newTeacher = await Teachers.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        teacher: newTeacher,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `🧨 ${error}💣`,
    });
  }
};

// get specific teacher
exports.getTeacher = async (req, res) => {
  try {
    const teacherId = req.params.id;
    const teacher = await Teachers.findById(teacherId);
    res.status(200).json({
      status: "success",
      data: {
        teacher: teacher,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: `🙎${error}💣`,
    });
  }
};

// update teacher
exports.updateTeacher = async (req, res) => {
  try {
    const teacherId = req.params.id;
    const teacherUpdate = await Teachers.findByIdAndUpdate(
      teacherId,
      req.body,
      {
        new: true,
      }
    );
    res.status(202).json({
      status: "success",
      data: {
        teacher: teacherUpdate,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `➡️↘️${error}↙️⬇️`,
    });
  }
};

// Delete teacher
exports.deleteTeacher = async (req, res) => {
  try {
    const teacherId = req.params.id;
    const teacher = await Teachers.findByIdAndDelete(teacherId);
    res.status(201).json({
      status: "success",
      teacher: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `❌🙎${error}❌🙎`,
    });
  }
};

exports.studentRequest = async (req, res) => {
  try {
    const stdId = req.params.studentId;
    const teachId = req.params.teacherId;
    const teacher = await Teachers.findById(teachId);
    teacher.reservation.push(stdId);
    teacher.save();
    console.log(teacher);
    return res.status(200).json({
      message: teacher,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

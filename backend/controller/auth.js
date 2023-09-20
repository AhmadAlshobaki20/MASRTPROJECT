// Authentication for student and teachers
const Student = require("../model/Student");
const Teacher = require("../model/Teacher");
const jwt = require("jsonwebtoken");
const promisify = require("util.promisify");
const signing = (id, PRIVATE_KEY) => {
  return jwt.sign({ id: id }, PRIVATE_KEY, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

exports.signUpStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    const token = signing(student._id, process.env.PRIVATE_KEY);
    res.status(201).json({
      status: "success",
      data: {
        Student: student,
      },
      token: token,
    });
  } catch (error) {
    res.status(404).json({
      massage: error,
    });
  }
};

exports.signInStudent = async (req, res, next) => {
  const { email, password } = req.body;
  //1) check if the email and password exist
  if (!email || !password) {
    return res.status(400).json({
      message: "email or password is not exist",
    });
  }
  //2) check user and password is correct
  const student = await Student.findOne({ email }).select("+password"); // explicity select
  // the correctPassword function will available on all document into certain collection
  const correct = await student.correctPassword(password, student.password);
  if (!correct) {
    return res.status(404).json({
      message: "password or email invalid",
    });
  }
  const token = signing(student._id, process.env.PRIVATE_KEY);
  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(201).json({
    status: "success",
    token: token,
  });
  next();
};

exports.studentProtect = async (req, res, next) => {
  try {
    console.log(req.headers["authorization"]);
    // 1) Check if the "authorization" header exists
    const tokenHeader = req.headers["authorization"];
    if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "User not logged in. Token missing or invalid format.",
      });
    }
    // Extract the token from the header
    const token = tokenHeader.replace("Bearer ", "");
    console.log(token);
    // 2) Verify the token's validity
    const decoded = await promisify(jwt.verify)(token, process.env.PRIVATE_KEY);
    // 3) At this point, the token is valid, you can store the decoded data in req for later use
    // req.user = decoded;
    const student = await Student.findById(decoded.id);
    if (!student) {
      return res.status(404).json({
        message: "student not found",
      });
    }
    req.user = student;
    // 4) Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token verification failed.",
      error: error.message,
    });
  }
};

// -------------------------------------------teacher functions-------------------------------------------

// teacher signUp
exports.signUpTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    const token = signing(teacher._id, process.env.PRIVATE_KEY);
    res.status(201).json({
      status: "success",
      data: {
        teacher,
      },
      token: token,
    });
  } catch (error) {
    res.status(404).json({
      massage: error,
    });
  }
};

// teacher signIn
exports.signInTeacher = async (req, res) => {
  const { email, password } = req.body;
  //1) check if the email and password exist
  if (!email || !password) {
    return res.status(400).json({
      message: "email or password is not exist",
    });
  }
  //2) check user and password is correct
  const teacher = await Teacher.findOne({ email }).select("+password"); // explicity select
  // the correctPassword function will available on all document into certain collection
  const correct = await teacher.correctPassword(password, teacher.password);
  if (!correct) {
    return res.status(404).json({
      message: "password or email invalid",
    });
  }
  const token = signing(teacher._id, process.env.PRIVATE_KEY);
  // set token into header
  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(201).json({
    status: "success",
    token: token,
  });
};

exports.teacherProtect = async (req, res, next) => {
  // check if token exist
  const token = req.headers["authorization"];
  // token = token.replace("Bearer ", "");
  if (!token) {
    return res.status(404).json({ message: "token not found" });
  }
  const newToken = token.replace("Bearer ", "");

  // verify and decode the token
  const decoded = await promisify(jwt.verify)(
    newToken,
    process.env.PRIVATE_KEY
  );
  const teacher = await Teacher.findById(decoded.id);

  req.teacher = teacher;

  res.status(200).json({
    teacher: req.teacher,
  });
};

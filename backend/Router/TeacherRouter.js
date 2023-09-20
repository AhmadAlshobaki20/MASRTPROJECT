const express = require("express");
const teacherController = require("../controller/Teachers");
const authController = require("../controller/auth");
const router = express.Router();

// registration
router.route("/register").post(authController.signUpTeacher);

// login
router.route("/login").post(authController.signInTeacher);

router
  .route("/afterLogin")
  .post(authController.teacherProtect);



router
  .route("/")
  .get(teacherController.getAllTeachers)
  .post(teacherController.AddTeacher);
// to get and delete and update specific Teacher
router
  .route("/:id")
  .get(teacherController.getTeacher)
  .patch(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

router
  .route("/:teacherId/request/:studentId")
  .post(teacherController.studentRequest);


module.exports = router;

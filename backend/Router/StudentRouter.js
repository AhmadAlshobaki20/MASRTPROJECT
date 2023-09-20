const express = require("express");
// import user controller
const studentController = require("../controller/Student");
const authController = require("../controller/auth");
// create Router middleware
const router = express.Router();

// registration
router.route("/register").post(authController.signUpStudent);

// login
router.route("/login").post(authController.signInStudent);

// router to get all Students
router
  .route("/")
  .get(studentController.getAllStudents)
  .post(authController.signUpStudent);

// to get and delete and update specific Students
router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

router
  .route("/:stdId/reservation/:teacherId")
  .patch(studentController.approval, studentController.reservation);

router.post("/authLogin", authController.studentProtect, (req, res) => {
  // This route is protected, and you can access the authenticated user data via req.user
  res.json({
    message: "This is a protected route.",
    user: req.user, // Access the authenticated user data here
  });
});
module.exports = router;

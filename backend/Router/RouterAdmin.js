const express = require("express");

const AdminController = require("./../controller/AdminController");
const authController = require("./../controller/authController");
const auth = require("./../controller/auth");
const router = express.Router();

router.route("/register").post(authController.adminRegister);
router.route("/login").post(authController.adminLogin);

router.route("/").get(AdminController.getALLAdmin);

router.route("/afterLogin").post(authController.protect);


module.exports = router;

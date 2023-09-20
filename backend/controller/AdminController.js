// call Admin model
const Admin = require("../model/Admin");

exports.getALLAdmin = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({
      status: "success",
      data: {
        admins,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

// const Subject = require("../model/subject");

// exports.getAllSubject = async (req, res) => {
//   try {
//     const allSubject = await Subject.find();
//     res.status(200).json({
//       status:"success",
//       data:{
//         allSubject
//       }
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.setNewSubject = async (req, res) => {
//   try {
//     const newSubject = await Subject.create(req.body);
//     res.status(200).json({
//       status:"success",
//       data:{
//         newSubject 
//       }
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };

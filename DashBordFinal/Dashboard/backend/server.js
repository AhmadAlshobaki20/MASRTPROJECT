// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const app = require("./app");

// // NOTE : we can use process.env -->(global variable) inside any file in our project
// dotenv.config({ path: "./config.env" });

// // connect database
// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("successful connect DB ...");
//   });

// // listen server
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`server running on ${port} ....`);
// });

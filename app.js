// app.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("../Practice/src/Routes/auth");
const protectedRoute = require("../Practice/src/Routes/protectedRoute");
app.use(express.json());
app.use(authRoutes);
app.use(protectedRoute);
const PORT = process.env.PORT;
mongoose.connect(process.env.MY_DB_ID).then(()=>{
  console.log("connected")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//////////////////////////////////////////////////////////////////////////////////////////////
// require("dotenv").config();
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// app.use(express.json());

// // MongoDB Schema for tasks
// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

// const Task = mongoose.model("Task", taskSchema);

// // Create a new task
// app.post("/tasks", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const task = new Task({ title, description, completed: false });
//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// // Get all tasks
// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.json(tasks);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// // Update a task by ID
// app.patch("/tasks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, completed } = req.body;
//     const updatedTask = await Task.findByIdAndUpdate(
//       id,
//       { title, description, completed },
//       { new: true }
//     );
//     res.json(updatedTask);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// // Delete a task by ID
// app.delete("/tasks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Task.findByIdAndDelete(id);
//     res.sendStatus(204);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// // MongoDB connection and server listening
// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MY_DB_ID, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("Server is running on port " + process.env.PORT);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// startServer();

///////////////////////////////////////////////////////////////////////////////////////////
// require("dotenv").config();
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// app.use(express.json());

// const myDataSchema = new mongoose.Schema({
//   roll_no: String,
//   name: String,
//   class: Number,
//   date: String,
// });

// const myData = mongoose.model("myDataSchema", myDataSchema);

// const myDat = new myData({
//   roll_no: 2,
//   name: "Anas Rasool",
//   class: 15,
//   date: "13.jan,2024",
// });
// myDat.save().then(
//   () => console.log("My data entered"),
//   (err) => console.log(err)
// );

// app.get("/", async (req, res) => {
//   try {
//     const data1 = await myData.find({});
//     console.log(data1, ".............");
//     res.send(data1);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

// // const studentSchema = new mongoose.Schema({
// //   roll_no: Number,
// //   name: String,
// //   year: Number,
// //   subjects: [String],
// // });

// // const Student = mongoose.model("Student", studentSchema);

// // const stud = new Student({
// //   roll_no: 1001,
// //   name: "Madison Hyde",
// //   year: 3,
// //   subjects: ["DBMS", "OS", "Graph Theory", "Internet Programming"],
// // });
// // stud.save().then(
// //   () => console.log("One entry added"),
// //   (err) => console.log(err)
// // );

// // app.get("/", async (req, res) => {
// //   try {
// //     const data = await Student.find({});
// //     console.log(data, ".............");
// //     res.send(data);
// //   } catch (error) {
// //     res.sendStatus(500);
// //   }
// // });

// const listnings = () => {
//   app.listen(process.env.PORT, () =>
//     console.log("listening on port name " + process.env.PORT)
//   );
// };
// mongoose
//   .connect(process.env.MY_DB_ID)
//   .then(() => listnings())
//   .catch((e) => {
//     console.log(e, "errrr----");
//   });

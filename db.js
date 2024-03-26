const mongoose = require("mongoose");

// mongo url

const mongoURL = "mongodb://0.0.0.0:27017/hotels";
//setup connection mongodb://localhost:27017
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose
//   .connect("mongodb://localhost:27027/hotels", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// mongoose maintains default connections representing mongodb
const db = mongoose.connection;

// event listeners

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("Error connecting to MongoDB server", err);
});

db.on("disconnected", () => {
  console.log("MongoDB server Disconnected");
});

//export db connection

module.exports = db;

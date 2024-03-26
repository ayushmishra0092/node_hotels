const mongoose = require("mongoose");
require("dotenv").config();
const MongoURL = process.env.MongoURL;
// mongo url

// for offline connections -> "mongodb://0.0.0.0:27017/hotels";
const mongoURL = MongoURL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

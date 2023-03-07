const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 6000;
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://wasimakram:Wasimak.24@cluster0.high9tr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to DB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB is disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB is connected!");
});

app.use(express.json());
app.use(cors());

const Information = mongoose.model("Information", {
  end_year: { type: String },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: String },
  published: { type: String },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
});

app.post("/", (req, res) => {
  try {
  Information.insertMany(
    );
      res.send("success")
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  const data = await Information.find();

  res.json(data);
});

app.get("/hello", (req, res) => {
  res.send("hello world!");
});

// app.use((err, req, res) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

app.listen(PORT, () => {
  connect();

  console.log("connected to server..." + PORT);
});

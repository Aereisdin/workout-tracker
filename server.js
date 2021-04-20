const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api"));
// app.use(require("./routes/htmlRoutes"));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/exercise", function(req, res) {
  console.log(`sending you exercise`);
  res.sendFile(path.join(__dirname, "/pubic/exercise.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

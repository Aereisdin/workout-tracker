const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please type Resistance or Cardio"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  duration: {
    type: Number,
    required: "Enter an amount of time"
  },
  weight: {
    type: Number,
    required: "Enter an amount of weight"
  },
  reps: {
    type: Number,
    required: "Enter an amount of repetitions"
  },  
  sets: {
    type: Number,
    required: "Enter an amount of sets"
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

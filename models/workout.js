const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise")

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
    default: { type: Schema.Types.ObjectId, ref: "Exercise"}
  },
  exercises: { type: Schema.Types.ObjectId, ref: "Exercise"}
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

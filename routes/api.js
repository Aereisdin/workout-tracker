const router = require("express").Router();
const Exercise = require("../models/Exercise.js");
const Workout = require("../models/Workout")

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  console.log(`~~~~--Adding Exercise---~~~`)
  Exercise.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  console.log(`----~~~Receiving the request for Last Workout Info~~~----`)
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
      // console.log(dbWorkout)
    })
    
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

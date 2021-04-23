const router = require("express").Router();
const Exercise = require("../models/Exercise.js");
const Workout = require("../models/Workout")

router.post("/api/workouts", ({ body }, res) => {
  console.log(`~~~~--Creating a new workout---~~~`);
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  console.log(`~~~~--Adding Exercise---~~~`);
  console.log(body);
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
  console.log(`~~~~--Getting multiple entries for front---~~~`);
  Workout.aggregate([
    {
      $addFields: {totalDuration: {$sum: "$exercises.duration"}}
    }  
  ])
  .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  console.log(`----~~~Receiving the request for Last Workout Info~~~----`)
  Workout.aggregate([
    {
      $addFields: {totalDuration: {$sum: "$exercises.duration"}}
    }
  ])
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

// const filter = { exercises: duration }
// Workout.aggregate([
//   {$match: filter},
//   {$group: {
//     _id: {},
//     total: {
//       $sum: "$amount"
//     }
//   }
// }
// ])
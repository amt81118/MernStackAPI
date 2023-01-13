const workout = require("../models/WorkoutModel");

// create new workout
const createWorkout = async (req, res) => {
  console.log("Add ...");
  const { title, load, reps } = req.body;
  try {
    const result = await workout.create({ title, load, reps });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

//get all workout
const getAllWorkout = async (req, res) => {
  console.log("All Workout...");
  const result = await workout.find();
  res.json(result);
};

// get single worlout
const getSingleWorkout = async (req, res) => {
  console.log("workout");
  const reps = req.params.reps;
  // console.log(id);
  // console.log(typeof id);
  const result = await workout.findOne(reps)
  res.json(result);
};

// delete workout
const deleteSingleWorkout = async (req, res) => {
  console.log("delete");
  const { id } = req.params;
  const result = await workout.findByIdAndDelete(id);
  res.json(result);
};

// update workout
const updateWorkout = async (req, res) => {
  console.log("update");
  const { id } = req.params;
  const { title, load, reps } = req.body;
  const result = await workout.findByIdAndUpdate(id, { title, load, reps });
  res.json(result);
};

module.exports = {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteSingleWorkout,
  updateWorkout,
};

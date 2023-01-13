const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  updateWorkout,
  deleteSingleWorkout,
} = require("../controllers/workoutController");

///////get all//////////////////////////////////////
router.get("/", getAllWorkout);

/////////////////get single Workout////////////////
router.get("/:id", getSingleWorkout);

//////post///////////////////////////////////////////
router.post("/", createWorkout);

///////////////Delete///////////////////////////
router.delete("/:id", deleteSingleWorkout);

/////////////////Update/////////////////////////////
router.put("/:id", updateWorkout);

module.exports = router;

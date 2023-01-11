const express = require("express");
const router = express.Router();
const workout = require("../models/WorkoutModel");

router.get("/", async (req, res) => {
  const result = await workout.find();
  res.json(result);
});
router.get("/:id",async (req, res) => {
    const result = await workout.find({});
    res.json(result);
});

//////post///////////////////////////////////////////
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const result = await workout.create({ title, load, reps });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});
/////////////////////////////////////////////////////
router.delete("/", (req, res) => {
  res.json({ message: "welcome" });
});
router.put("/", (req, res) => {
  res.json({ message: "welcome" });
});
module.exports = router;

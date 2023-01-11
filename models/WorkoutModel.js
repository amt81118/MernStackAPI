const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  reps: {
    type: String,
    required: true,
    trim: true,
  },
  load: {
    type: Number,
    required: true,
    trim: true,
  },
},
{ timestamps : true });
module.exports = mongoose.model("Workout", workoutSchema);

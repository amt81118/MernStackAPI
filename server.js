const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
app.use(cors());
const Workout = require("./routes/Workout");
///////////////////////////////////////////
app.use(express.json());
///////////////////////////////////////////

//Mongo connectin///////////////////////////
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successsful connection");
    //listen for request after connection successfull...hehe on port 4000
    app.listen(process.env.PORT, () =>
      console.log("Server listening on port 4000 !!!")
    );
  })
  .catch((err) => console.log(err));
/////////////////////////////////////////

//////Handle all request for /api///////////
app.use("/api", Workout);
///////////////////////////////////////////


require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

const authRoutes = require("./routes/auth.js");
const jobRoutes = require("./routes/job.js");

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use("/auth", authRoutes);
app.use("/job", jobRoutes);


mongoose
  .connect(
   process.env.DB_URL 
  )
  .then(() => {
    console.log("connected to the DB");
    app.listen(process.env.PORT, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((err) => {
    console.error(err);
  });

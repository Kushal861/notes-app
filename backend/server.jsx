const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes.jsx");

require("dotenv").config();
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/notes", noteRoutes); //routes

//db con
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected and Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

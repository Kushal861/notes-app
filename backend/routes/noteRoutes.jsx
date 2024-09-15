const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel.jsx");
const {
  createNote,
  getNote,
  getNotes,
  deleteNote,
  updateNote,
} = require("../controller/noteController.js");

router.get("/", getNotes);

router.get("/:id", getNote);

router.post("/", createNote);

router.delete("/:id", deleteNote);

router.patch("/:id", updateNote);

module.exports = router;

const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel.jsx");
router.get("/", (req, res) => {
  res.json({ mssg: "get all notes" });
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "deleting a note" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "updating a note" });
});
console.log("haha");
module.exports = router;

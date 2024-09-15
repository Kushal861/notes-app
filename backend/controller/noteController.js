const Note = require("../models/noteModel.jsx");
const mongoose = require("mongoose");
//get all notes
const getNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 });
  res.status(200).json(notes);
};

//get a note
const getNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such note" });
  }
  const note = await Note.findById(id);
  if (!note) {
    return res.status(404).json({ error: "No such note exixts" });
  }
  res.status(200).json(note);
};

//create new  note
const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update note

const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such note" });
  }
  const note = await Note.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!note) {
    return res.status(404).json({ error: "No such note exixts" });
  }
  res.status(200).json(note);
};

//del a note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such note" });
  }
  const note = await Note.findOneAndDelete({ _id: id });

  if (!note) {
    return res.status(404).json({ error: "No such note exixts" });
  }
  res.status(200).json(note);
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote,
};

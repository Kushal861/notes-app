import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
      // console.log(notes);
    }
  }, []);
  const saveNoteToLocStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (title, content) => {
    const newNote = {
      id: nanoid(), // will use mongo id later
      title,
      content,
    };
    const saveNewNotes = [...notes, newNote];
    setNotes(saveNewNotes);
    // console.log(saveNewNotes);
    saveNoteToLocStorage(saveNewNotes);
  };

  const deleteNote = (id) => {
    const saveNewNotes = notes.filter((note) => note.id !== id);
    setNotes(saveNewNotes);
    // console.log("note deleted ");
    saveNoteToLocStorage(saveNewNotes);
  };

  return (
    <div className="App">
      <h2>Notes</h2>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;

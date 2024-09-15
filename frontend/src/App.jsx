import { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from db
    const fetchNotes = async () => {
      try {
        const response = await fetch("/notes");
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("couldn't fetch notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (title, content) => {
    const newNote = { title, content };

    try {
      const response = await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, data]);
    } catch (error) {
      console.error("Error in adding note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`/notes/${id}`, {
        method: "DELETE",
      });
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error in deleting note:", error);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Notes</h2>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;

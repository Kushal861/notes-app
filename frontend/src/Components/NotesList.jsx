import Note from "./Note";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NotesList;

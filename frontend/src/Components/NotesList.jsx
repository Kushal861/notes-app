// import Note from "./Note";

// const NotesList = ({ notes, deleteNote }) => {
//   return (
//     <div className="notes-list">
//       {notes.map((note) => (
//         <Note key={note._id} note={note} deleteNote={deleteNote} />
//       ))}
//     </div>
//   );
// };

// export default NotesList;
import Note from "./Note";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div
      className="notes-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {notes.map((note) => (
        <Note key={note._id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NotesList;

// import { useState } from "react";

// const Note = ({ note, deleteNote }) => {
//   return (
//     <div className="note">
//       <h3>{note._id}</h3>
//       <h2>{note.title}</h2>
//       <p>{note.content}</p>
//       <div className="note-footer">
//         <button onClick={() => deleteNote(note._id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default Note;
const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="note"
      style={{
        backgroundColor: "#fef68a",
        borderRadius: "10px",
        padding: "1rem",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        whiteSpace: "pre-wrap",
        margin: "10px",
        width: "250px",
      }}
    >
      <h3>{note._id}</h3>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="note-footer">
        <button
          onClick={() => deleteNote(note._id)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;

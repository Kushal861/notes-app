import { useState } from "react";

// const NoteForm = ({ addNote }) => {
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(title, content);
//     if (title && content) {
//       addNote(title, content);
//       setTitle("");
//       setContent("");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Note title"
//         rows="3"
//         cols="20"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <div className="note-form">
//         <textarea
//           type="text"
//           rows="8"
//           cols="20"
//           placeholder="Add Content "
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         ></textarea>
//         <button type="submit">Add</button>
//       </div>
//     </form>
//   );
// };

// export default NoteForm;
const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        rows="8"
        cols="30"
        placeholder="Add Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default NoteForm;

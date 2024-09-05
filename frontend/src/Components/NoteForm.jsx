import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    if (title && content) {
      addNote(title, content);
      setTitle("");
      setContent("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note title"
        rows="3"
        cols="20"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="note-form">
        <textarea
          type="text"
          rows="8"
          cols="20"
          placeholder="Add Content "
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NoteForm;

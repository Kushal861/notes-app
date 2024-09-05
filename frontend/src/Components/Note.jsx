const Note = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <h3>{note.id}</h3>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;

const getAllNotes = (req, res) => {
  res.json({ message: "You get all notes successfully!" });
};

const createNote = (req, res) => {
  res.json({ message: "You create a note successfully!" });
};

const updateNote = (req, res) => {
  res.json({ message: "You update a note successfully!" });
};

const deleteNote = (req, res) => {
  res.json({ message: "You delete a note successfully!" });
};

export { getAllNotes, createNote, updateNote, deleteNote };

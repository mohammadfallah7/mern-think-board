import Note from "../model/note.js";

const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: "Notes fetched successfully", data: notes });
  } catch (error) {
    console.error("Error getting all notes", error);
    res.status(500).json({ message: "Failed to get notes" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res
        .status(200)
        .json({ message: "Note fetched successfully", data: note });
    } else {
      res.status(404).json({ message: "Note with the given id not found" });
    }
  } catch (error) {
    console.error("Error getting note", error);
    res.status(500).json({ message: "Failed to get note" });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await new Note({ title, content }).save();
    res.status(201).json({ message: "Note created successfully", data: note });
  } catch (error) {
    console.error("Error create new note", error);
    res.status(500).json({ message: "Failed to create new note" });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (updatedNote) {
      res
        .status(200)
        .json({ message: "Note updated successfully", data: updatedNote });
    } else {
      res.status(404).json({ message: "Note with the given id not found" });
    }
  } catch (error) {
    console.error("Error updating note", error);
    res.status(500).json({ message: "Failed to update note" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (note) {
      res.status(200).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ message: "Note with the given id not found" });
    }
  } catch (error) {
    console.error("Error deleting note", error);
    res.status(500).json({ message: "Failed to delete note" });
  }
};

export { createNote, deleteNote, getAllNotes, getNoteById, updateNote };

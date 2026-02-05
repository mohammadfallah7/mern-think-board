import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controller/notes-controller.js";

const notesRouter = express.Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", createNote);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;

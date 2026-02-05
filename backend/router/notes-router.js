import express from "express";

const notesRouter = express.Router();

notesRouter.get("/", (req, res) => {
  res.json({ message: "You get all notes successfully!" });
});

notesRouter.post("/", (req, res) => {
  res.json({ message: "You create a note successfully!" });
});

notesRouter.put("/:id", (req, res) => {
  res.json({ message: "You update a note successfully!" });
});

notesRouter.delete("/:id", (req, res) => {
  res.json({ message: "You delete a note successfully!" });
});

export default notesRouter;

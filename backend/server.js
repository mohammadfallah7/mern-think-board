import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.json({ message: "You get all notes successfully!" });
});

app.post("/api/notes", (req, res) => {
  res.json({ message: "You create a note successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.json({ message: "You update a note successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.json({ message: "You delete a note successfully!" });
});

app.listen(3000, () => {
  console.log("Sever started on PORT:3000");
});

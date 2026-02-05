import express from "express";
import notesRouter from "./router/notes-router.js";

const app = express();

app.use("/api/notes", notesRouter);

app.listen(3000, () => {
  console.log("Sever started on PORT:3000");
});

import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import notesRouter from "./router/notes-router.js";

dotenv.config();

const app = express();

connectDB().then(() => {
  const port = process.env.PORT || 3001;

  app.use(express.json());
  app.use("/api/notes", notesRouter);

  app.listen(port, () => {
    console.log(`Sever started on PORT:${port}`);
  });
});
